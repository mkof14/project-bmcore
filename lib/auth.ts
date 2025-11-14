import { createRemoteJWKSet, jwtVerify } from 'jose';
import type { NextApiRequest } from 'next';
const ISSUER = process.env.AUTH_ISSUER_URL!;
const JWKS = createRemoteJWKSet(new URL(`${ISSUER}/.well-known/jwks.json`));
export async function getUserFromRequest(req: NextApiRequest){const a=req.headers.authorization||'';const t=a.startsWith('Bearer ')?a.slice(7):null;if(!t)return null;const {payload}=await jwtVerify(t,JWKS,{issuer:ISSUER});const sub=String(payload.sub||'');const email=typeof payload.email==='string'?payload.email:undefined;if(!sub)return null;return {id:sub,email};}
