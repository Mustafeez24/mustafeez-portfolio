const lines = [
  "Mohammed Mustafeez K R",
  "Aspiring Software Engineer | Java Developer",
  "",
  "Email: krmdmustafeez@gmail.com",
  "GitHub: https://github.com/Mustafeez24",
  "LinkedIn: https://www.linkedin.com/in/mohammed-mustafeez-b6b77b328/",
  "",
  "Education",
  "Bachelor of Computer Applications (BCA)",
  "HKBK Degree College | Expected Graduation: 2027",
  "",
  "Focus Areas",
  "Java, Data Structures and Algorithms, Backend Development, REST APIs,",
  "Database Design, Software Engineering Fundamentals",
  "",
  "Note",
  "Replace this starter PDF with the final resume when it is ready.",
];

function escapePdfText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function createPdf() {
  const textCommands = lines
    .map((line, index) => {
      const y = 760 - index * 22;
      const fontSize = index === 0 ? 20 : index === 1 ? 12 : 10;
      return `BT /F1 ${fontSize} Tf 54 ${y} Td (${escapePdfText(line)}) Tj ET`;
    })
    .join("\n");

  const objects = [
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n",
    "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
    `5 0 obj\n<< /Length ${textCommands.length} >>\nstream\n${textCommands}\nendstream\nendobj\n`,
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  for (const object of objects) {
    offsets.push(pdf.length);
    pdf += object;
  }

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (const offset of offsets.slice(1)) {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return pdf;
}

export function GET() {
  return new Response(createPdf(), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Mohammed-Mustafeez-K-R-Resume.pdf"',
    },
  });
}
