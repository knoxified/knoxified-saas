import { NextResponse } from 'next/server';
import { enterpriseSystems, proSystems, automations } from '@/lib/marketing-data';

export async function GET() {
  return NextResponse.json({
    enterpriseSystems,
    proSystems,
    automations
  });
}
