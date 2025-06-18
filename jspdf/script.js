import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();

doc.text("Hello world!", 10, 10);
doc.text("Tudo Certo", 20, 10);
doc.save("a4.pdf");