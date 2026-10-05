import { NextRequest, NextResponse } from "next/server";
import { saveAppointment } from "@/lib/appointments";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot spam check
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const { name, phone, email, preferredDate, preferredTime, treatment, patientType, message, consent } = body;

    if (!name || !phone || !consent) {
      return NextResponse.json(
        { error: "Name, phone, and consent are required." },
        { status: 400 }
      );
    }

    const submission = await saveAppointment({
      name,
      phone,
      email: email || "",
      preferredDate: preferredDate || "",
      preferredTime: preferredTime || "",
      treatment: treatment || "",
      patientType: patientType || "new",
      message: message || "",
      consent,
    });

    return NextResponse.json({ success: true, id: submission.id });
  } catch {
    return NextResponse.json(
      { error: "Failed to process appointment enquiry." },
      { status: 500 }
    );
  }
}
