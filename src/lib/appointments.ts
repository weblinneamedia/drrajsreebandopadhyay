import { promises as fs } from "fs";
import path from "path";

export interface AppointmentSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  treatment: string;
  patientType: string;
  message: string;
  consent: boolean;
  submittedAt: string;
  honeypot?: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const APPOINTMENTS_FILE = path.join(DATA_DIR, "appointments.json");

async function ensureDataFile() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
  try {
    await fs.access(APPOINTMENTS_FILE);
  } catch {
    await fs.writeFile(APPOINTMENTS_FILE, "[]", "utf-8");
  }
}

export async function saveAppointment(
  data: Omit<AppointmentSubmission, "id" | "submittedAt">
): Promise<AppointmentSubmission> {
  await ensureDataFile();
  const content = await fs.readFile(APPOINTMENTS_FILE, "utf-8");
  const appointments: AppointmentSubmission[] = JSON.parse(content);

  const submission: AppointmentSubmission = {
    ...data,
    id: `apt_${Date.now()}`,
    submittedAt: new Date().toISOString(),
  };

  appointments.push(submission);
  await fs.writeFile(APPOINTMENTS_FILE, JSON.stringify(appointments, null, 2));

  return submission;
}

export async function sendEmailNotification(
  submission: AppointmentSubmission
): Promise<void> {
  const notificationEmail = process.env.APPOINTMENT_NOTIFICATION_EMAIL;
  if (!notificationEmail) return;

  // Placeholder for email integration (Resend, SendGrid, Nodemailer, etc.)
  console.log(
    `[Appointment Notification] New enquiry from ${submission.name} (${submission.phone}) → ${notificationEmail}`
  );
}
