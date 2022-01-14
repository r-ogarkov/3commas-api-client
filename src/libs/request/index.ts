import qs from "qs";
import fetch from "node-fetch";
import { handler } from "libs/request/handler";
import { paths } from "api-schema";
import { routeFor } from "libs/request/routeFor";
import { signature } from "libs/signature";

export const request = async <U extends keyof paths, M extends keyof paths[U]>(
  url: U,
  method: M,
  options?: {
    // @ts-ignore
    data?: paths[U][M]["parameters"]["body" | "query"],
    // @ts-ignore
    params?: paths[U][M]["parameters"]["path"]
  },
  req?: {
    headers?: Record<string, string>;
    secret?: string;
  },
) => {
  const {headers, secret} = req || {};

  const isGET = method === "get";
  const isServer = typeof window === "undefined";

  const route = routeFor(url, options?.params || {});

  if(/\/{.+}/.test(route)) {
    const params = route.match(/{[A-z]+}/g)?.map((value) => value.replace(/{([A-z]+)}/g, "$1")).join(", ")
    throw new Error(`You didn't pass parameters ${params} `);
  }

  const body = isGET
    ? qs.stringify(options?.data || {}, {arrayFormat: "brackets"})
    : JSON.stringify(options?.data || {});
  const {
    href,
    pathname,
    search
  } = new URL("/public/api" + route + (isGET && body ? `?${body}` : ""), "https://api.3commas.io");
  const response = await fetch(
    href,
    {
      method: method as string,
      headers: {
        "content-type": "application/json",
        ...(!isServer ? {"x-requested-with": "XMLHttpRequest"} : {}),
        ...(headers?.["user-agent"]
          ? {"user-agent": headers?.["user-agent"]}
          : {}),
        ...(headers?.["x-forwarded-for"]
          ? {"x-forwarded-for": headers?.["x-forwarded-for"]}
          : {}),
        ...(headers?.cookie
          ? {cookie: headers?.cookie}
          : {}),
        ...(secret
          ? {"signature": signature(secret, pathname + search)}
          : {}),
        ...(headers || {}),
      },
      ...(!isGET && body ? {body} : {}),
    }
  );
  // @ts-ignore
  return await handler<paths[U][M]["responses"][200 | 201 | 202 | 203 | 204]>(response, {method, body: !isGET && body})
};
