import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserFromRequest } from '../lib/auth';
import { sql } from '../lib/db';
export default async function handler(req: NextApiRequest, res: NextApiResponse){ const user=await getUserFromRequest(req); if(!user)return res.status(401).json({error:'unauthorized'}); const [r]=await sql`select role from user_roles where user_id=${user.id}`; const [s]=await sql`select status,plan from subscriptions where user_id=${user.id}`; const base=(r?.role as string)||'user'; const plan=(s?.plan as string)||null; const eff=(base==='admin'||base==='support')?base:(plan||base); res.json({id:user.id,email:user.email,role:base,subscription:s||null,effectiveRole:eff}); }
