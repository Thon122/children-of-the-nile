'use server'
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function handlePledge(formData: FormData) {
  try {
    const name = formData.get('from_name') as string;
    const email = formData.get('reply_to') as string;
    const message = formData.get('message') as string;

    await prisma.pledge.create({
      data: {
        name: name,
        email: email,
        amount: 1, // Or parse a number from your message if needed
      }
    });

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error("DB Error:", error);
    return { success: false, error: "Failed to save" };
  }
}