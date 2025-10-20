import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { amount, category, comment } = await req.json();

    if (!amount) {
      return NextResponse.json(
        { error: "Amount are required" },
        { status: 400 }
      );
    }

    const expense = await prisma.exepense.create({
      data: {
        amount: parseFloat(amount),
        category,
        comment,
      },
    });

    return NextResponse.json(expense);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
