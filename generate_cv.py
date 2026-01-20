
from fpdf import FPDF

class CV(FPDF):
    def header(self):
        # Arial bold 15
        self.set_font('Arial', 'B', 15)
        # Title
        self.cell(0, 10, 'JOEL PINEIRO SUAREZ', 0, 1, 'C')
        self.set_font('Arial', '', 11)
        self.cell(0, 10, 'Senior Software Developer | Spring Boot Expert', 0, 1, 'C')
        self.set_font('Arial', '', 9)
        self.cell(0, 5, 'A Chan, Amil, Morana, Espana  |  joelps117@hotmail.es  |  github.com/Jowy43', 0, 1, 'C')
        self.ln(5)

    def section_title(self, title):
        self.set_font('Arial', 'B', 12)
        self.set_fill_color(240, 240, 240)
        self.cell(0, 8, title, 0, 1, 'L', 1)
        self.ln(2)

    def section_body(self, text):
        self.set_font('Arial', '', 10)
        self.multi_cell(0, 5, text)
        self.ln(3)

    def job_entry(self, role, company, dates, description):
        self.set_font('Arial', 'B', 10)
        self.cell(0, 5, f"{role} | {company}", 0, 1)
        self.set_font('Arial', 'I', 9)
        self.cell(0, 5, dates, 0, 1)
        self.ln(1)
        self.set_font('Arial', '', 9)
        for point in description:
            self.cell(5) # Indent
            self.multi_cell(0, 5, f"- {point}")
        self.ln(3)

pdf = CV()
pdf.add_page()
pdf.set_auto_page_break(auto=True, margin=15)

# RESUMEN
pdf.section_title("RESUMEN PROFESIONAL")
pdf.section_body("Desarrollador de software con mas de 3 anos de experiencia, altamente especializado en el desarrollo backend con Spring Boot y arquitecturas de microservicios. Aporto solida experiencia en la coordinacion tecnica de equipos, asegurando la calidad del codigo y la eficiencia en las implementaciones criticas. He trabajado en proyectos para sectores diversos como sector maritimo, ERP, moda, automocion y energia electrica.\n\nActualmente, desarrollo soluciones propias basadas en Inteligencia Artificial (Gems y analizadores) para automatizar procesos y optimizar la calidad del codigo.")

# EXPERIENCIA
pdf.section_title("EXPERIENCIA PROFESIONAL")

pdf.job_entry(
    "Senior Software Developer",
    "Nunegal",
    "Mayo 2025 - Actualidad",
    [
        "Desarrollo Backend Core (Migracion): Ejecucion tecnica de la migracion de un ERP del sector maritimo a Java 21 y Spring Boot.",
        "Automatizacion con IA: Desarrollo de herramientas personalizadas (Gems) para la automatizacion de traducciones y analizadores de codigo.",
        "Ingenieria de Datos & Reporting: Reingenieria de consultas complejas en PostgreSQL para Jasper Reports.",
        "Estandarizacion Tecnica: Impulsor de buenas practicas de desarrollo y flujos con Git."
    ]
)

pdf.job_entry(
    "Software Developer",
    "NTT DATA",
    "Abril 2024 - Mayo 2025",
    [
        "Optimizacion Extrema: Reduccion de tiempos de ejecucion de 10 horas a 30 minutos mediante multihilo y optimizacion SQL.",
        "Desarrollo Backend & Calidad: Desarrollo con Spring Boot y Java. Realizacion de Code Reviews.",
        "Base de Datos: Gestion integral de MongoDB y Microsoft SQL Server.",
        "Liderazgo en IA: Integracion y formacion en herramientas de IA para el equipo."
    ]
)

pdf.job_entry(
    "Software Developer",
    "Imatia Innovation",
    "Marzo 2022 - Abril 2024",
    [
        "Arquitectura DDD & Moda: Desarrollo escalable con DDD, Keycloak y Apache Kafka.",
        "Migracion Sectorial: Adaptacion de plataforma Spring Boot/Angular al sector automocion.",
        "Desarrollo de Producto (CRM): Creacion de CRM empresarial con Spring Boot y Angular.",
        "Mantenimiento ERP: Desarrollo en Java 8 con framework Ontimize."
    ]
)

# HABILIDADES
pdf.section_title("HABILIDADES TECNICAS")
pdf.section_body(
    "Lenguajes: Java (Expertise v8 a v21).\n"
    "Frameworks: Spring Boot, Angular, React, Ontimize, Thymeleaf.\n"
    "Arquitectura & Seguridad: DDD, Microservicios, Keycloak.\n"
    "Bases de Datos: MongoDB, SQL Server, PostgreSQL.\n"
    "DevOps: Docker, Git/GitHub, JIRA, Apache Kafka, Jasper Reports.\n"
    "IA: Gems personalizadas, Code Analyzers, automatizacion."
)

# EDUCACION
pdf.section_title("FORMACION ACADEMICA")
pdf.section_body(
    "Tecnico Superior en Desarrollo de Aplicaciones Multiplataforma | IES de Teis\n"
    "Tecnico Superior en Administracion de Sistemas Informaticos en Red | IES de Teis\n"
    "Certificaciones: Java, Spring Boot, GenAI y Desarrollo de Software (Udemy)."
)

pdf.output("public/Joel_Pineiro_CV.pdf")
print("PDF generated successfully.")
