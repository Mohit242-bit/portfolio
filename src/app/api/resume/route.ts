import { jsPDF } from 'jspdf';

export async function GET() {
  try {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Set colors
    const primaryColor = [51, 130, 246]; // Blue
    const textColor = [0, 0, 0];
    const lightGray = [100, 100, 100];

    // Add header
    pdf.setFillColor(51, 130, 246);
    pdf.rect(0, 0, 210, 30, 'F');
    
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(28);
    pdf.text('Mohit Rawat', 15, 22);

    // Add contact info
    pdf.setTextColor(100, 100, 100);
    pdf.setFontSize(10);
    pdf.text('Full-Stack Web Developer | React | Next.js | Node.js', 15, 28);

    // Contact details
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(9);
    pdf.text('Email: mohit@example.com | Phone: +91-XXXXXXXXXX', 15, 33);
    pdf.text('GitHub: github.com/Mohit242-bit | Portfolio: mohitrawat.com', 15, 37);

    let yPosition = 45;

    // Professional Summary
    pdf.setTextColor(51, 130, 246);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('PROFESSIONAL SUMMARY', 15, yPosition);
    
    pdf.setTextColor(0, 0, 0);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    yPosition += 7;
    const summaryText = pdf.splitTextToSize(
      'Full-stack web developer with 3+ years of experience in building modern, scalable web applications. Specialized in React, Next.js, and Node.js. Experienced in working with Kraftx Works agency on diverse client projects. Strong focus on performance optimization, user experience, and clean code practices.',
      180
    );
    pdf.text(summaryText, 15, yPosition);
    yPosition += summaryText.length * 4 + 5;

    // Experience
    pdf.setTextColor(51, 130, 246);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('EXPERIENCE', 15, yPosition);
    
    yPosition += 7;
    pdf.setTextColor(0, 0, 0);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.text('Full-Stack Web Developer - Kraftx Works', 15, yPosition);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text('January 2023 - Present', 15, yPosition + 5);
    
    yPosition += 12;
    const exp1Points = [
      '• Developed and maintained 15+ client websites using React and Next.js',
      '• Implemented backend solutions with Node.js, Express, and MongoDB',
      '• Optimized web applications achieving 40% performance improvement',
      '• Collaborated with designers and project managers on multiple projects'
    ];
    
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(9);
    exp1Points.forEach(point => {
      pdf.text(point, 15, yPosition);
      yPosition += 5;
    });

    yPosition += 3;
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.text('Freelance Web Developer', 15, yPosition);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text('2022 - Present', 15, yPosition + 5);
    
    yPosition += 12;
    const exp2Points = [
      '• Designed and developed custom websites for startups and small businesses',
      '• Managed full project lifecycle from concept to deployment',
      '• Implemented modern design patterns and best practices',
      '• Ensured cross-browser compatibility and mobile responsiveness'
    ];
    
    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(9);
    exp2Points.forEach(point => {
      pdf.text(point, 15, yPosition);
      yPosition += 5;
    });

    // Check if we need a new page
    if (yPosition > 250) {
      pdf.addPage();
      yPosition = 15;
    }

    // Skills
    yPosition += 5;
    pdf.setTextColor(51, 130, 246);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('SKILLS', 15, yPosition);
    
    yPosition += 7;
    pdf.setTextColor(0, 0, 0);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(10);
    
    const skills = {
      'Frontend': 'React, Next.js, TypeScript, Tailwind CSS, GSAP, Three.js, Framer Motion',
      'Backend': 'Node.js, Express, PostgreSQL, MongoDB, Prisma, Firebase',
      'Tools & Design': 'Git, GitHub, Figma, Vercel, Netlify, VS Code',
      'Specialties': 'Performance Optimization, SEO, Accessibility, 3D Web, Responsive Design'
    };

    Object.entries(skills).forEach(([category, items]) => {
      pdf.setFont('helvetica', 'bold');
      pdf.text(`${category}:`, 15, yPosition);
      pdf.setFont('helvetica', 'normal');
      pdf.text(items, 50, yPosition);
      yPosition += 6;
    });

    // Projects
    yPosition += 5;
    pdf.setTextColor(51, 130, 246);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('FEATURED PROJECTS', 15, yPosition);
    
    yPosition += 7;
    pdf.setTextColor(0, 0, 0);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(10);
    pdf.text('Modern Portfolio Website', 15, yPosition);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.text('Next.js, GSAP, Three.js, Tailwind CSS', 15, yPosition + 4);
    pdf.text('Responsive portfolio with advanced animations and 3D effects', 15, yPosition + 8);
    yPosition += 14;

    // Education
    yPosition += 3;
    pdf.setTextColor(51, 130, 246);
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.text('EDUCATION', 15, yPosition);
    
    yPosition += 7;
    pdf.setTextColor(0, 0, 0);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(10);
    pdf.text('Computer Science & Engineering', 15, yPosition);
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9);
    pdf.setTextColor(100, 100, 100);
    pdf.text('Self-Taught | Online Certifications', 15, yPosition + 4);

    // Generate PDF
    const pdfBuffer = pdf.output('arraybuffer');
    
    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Mohit-Rawat-Resume.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return new Response('Error generating PDF', { status: 500 });
  }
}
