"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import type React from "react"
import { submitRegistration } from "./actions"

export default function Home() {
  const [isNavActive, setIsNavActive] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    message: string
    type: "success" | "error" | null
  }>({ message: "", type: null })

  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const targetId = target.getAttribute("href")
      if (targetId && targetId.startsWith("#")) {
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll)
      })
    }
  }, [])

  const toggleNav = () => {
    setIsNavActive(!isNavActive)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    try {
      const result = await submitRegistration(formData)
      setFormStatus({
        message: result.message,
        type: result.success ? "success" : "error",
      })

      if (result.success) {
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setFormStatus({
        message: "Error al enviar el registro",
        type: "error",
      })
    }
  }

  return (
    <>
      <header>
        <nav className="container">
          <div className="logo">Flash Pro</div>
          <ul className={`nav-links ${isNavActive ? "nav-active" : ""}`}>
            <li>
              <a href="#about">Acerca</a>
            </li>
            <li>
              <a href="#program">Programa</a>
            </li>
            <li>
              <a href="#instructor">Instructor</a>
            </li>
            <li>
              <a href="#materials">Materiales</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
          <div className={`burger ${isNavActive ? "toggle" : ""}`} onClick={toggleNav}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero">
          <div className="container">
            <h1>Curso Completo de Flash Portátil para Fotografía</h1>
            <p>Domina el arte de la iluminación con flash en 10 clases intensivas</p>
            <a href="#contact" className="cta-button">
              Inscríbete Ahora
            </a>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <h2>Acerca del Curso</h2>
            <p>
              Nuestro curso intensivo te enseñará cómo dominar el flash portátil para elevar tu fotografía al siguiente
              nivel. Perfecto para principiantes y fotógrafos intermedios que quieren expandir sus habilidades.
            </p>
            <ul>
              <li>Duración: 10 clases de 3 horas cada una (30 horas en total)</li>
              <li>Modalidad: Teoría + práctica con ejercicios guiados</li>
              <li>Nivel: Desde principiante hasta avanzado</li>
            </ul>
          </div>
        </section>

        <section id="program">
          <div className="container">
            <h2>Programa del Curso</h2>
            <div className="class-grid">
              <div className="class-card">
                <h3>Clase 1: Introducción al Flash Portátil</h3>
                <p>
                  <strong>Objetivo:</strong> Comprender qué es un flash portátil, cómo funciona y cuándo utilizarlo.
                </p>
                <h4>Teoría (1.5 horas)</h4>
                <ul>
                  <li>Qué es un flash portátil y diferencias con otras fuentes de luz.</li>
                  <li>Tipos de flash: incorporado vs. externo, manual vs. TTL, zapata vs. estudio.</li>
                  <li>Conceptos básicos de la luz en fotografía: calidad, dirección, temperatura de color.</li>
                </ul>
                <h4>Práctica (1.5 horas)</h4>
                <ul>
                  <li>Configuración del flash en la cámara.</li>
                  <li>Diferencia entre flash en cámara y fuera de cámara.</li>
                  <li>Prueba de distintos ángulos de luz en un objeto simple.</li>
                </ul>
              </div>

              <div className="class-card">
                <h3>Clase 2: Modos de Flash y Configuración</h3>
                <p>
                  <strong>Objetivo:</strong> Aprender a usar los modos Manual y TTL y sincronizar el flash con la
                  cámara.
                </p>
                <h4>Teoría (1.5 horas)</h4>
                <ul>
                  <li>Modo Manual vs. TTL: Cuándo usarlos y cómo configurarlos.</li>
                  <li>Sincronización del flash con la cámara.</li>
                  <li>Uso de High-Speed Sync (HSS).</li>
                </ul>
                <h4>Práctica (1.5 horas)</h4>
                <ul>
                  <li>Comparación entre disparos con flash manual y flash TTL.</li>
                  <li>Uso de diferentes configuraciones de potencia del flash.</li>
                  <li>Pruebas con velocidades de obturación altas y bajas.</li>
                </ul>
              </div>

              <div className="class-card">
                <h3>Clase 3: Modificación y Control de la Luz</h3>
                <p>
                  <strong>Objetivo:</strong> Aprender a suavizar, reflejar y modificar la luz del flash para obtener
                  mejores resultados.
                </p>
                <h4>Teoría (1.5 horas)</h4>
                <ul>
                  <li>Uso de difusores y reflectores para suavizar la luz.</li>
                  <li>Técnicas de rebote en paredes, techos y superficies.</li>
                  <li>Accesorios modificadores de luz: softbox, snoots, grids, geles.</li>
                </ul>
                <h4>Práctica (1.5 horas)</h4>
                <ul>
                  <li>Uso de diferentes modificadores con un retrato.</li>
                  <li>Cómo cambiar la calidad de la luz con softbox y rebotadores.</li>
                  <li>Práctica con gelatinas de colores para efectos creativos.</li>
                </ul>
              </div>

              <div className="class-card">
                <h3>Clase 4: Técnicas de Iluminación con Flash</h3>
                <p>
                  <strong>Objetivo:</strong> Aprender configuraciones básicas y avanzadas de iluminación con flash.
                </p>
                <h4>Teoría (1.5 horas)</h4>
                <ul>
                  <li>Iluminación con un solo flash: Esquema de Rembrandt, luz de mariposa y luz lateral.</li>
                  <li>Iluminación con múltiples flashes: Claves de luz principal, relleno y contra.</li>
                  <li>Flash fuera de cámara (Off-Camera Flash): Cómo usar disparadores remotos.</li>
                </ul>
                <h4>Práctica (1.5 horas)</h4>
                <ul>
                  <li>Uso de un solo flash para crear efectos de sombras.</li>
                  <li>Pruebas con 2 y 3 flashes en iluminación de retrato.</li>
                  <li>Uso de un flash de contra para separar el sujeto del fondo.</li>
                </ul>
              </div>

              <div className="class-card">
                <h3>Clase 5: Sonido y Video</h3>
                <p>
                  <strong>Objetivo:</strong> Aprender a integrar flash con video y sonido en la fotografía.
                </p>
                <h4>Teoría (1.5 horas)</h4>
                <ul>
                  <li>Cómo el flash interactúa con video.</li>
                  <li>Uso de flashes estroboscópicos para efectos en movimiento.</li>
                  <li>Sincronización de sonido y luz en eventos.</li>
                </ul>
                <h4>Práctica (1.5 horas)</h4>
                <ul>
                  <li>Pruebas de flash en video.</li>
                  <li>Fotografía de eventos con flash.</li>
                  <li>Congelación de movimiento con estroboscópico.</li>
                </ul>
              </div>

              <div className="class-card">
                <h3>Clase 6: Fotografía de Producto con Flash</h3>
                <p>
                  <strong>Objetivo:</strong> Iluminar productos de forma profesional.
                </p>
                <ul>
                  <li>Uso de softbox y reflectores para evitar reflejos.</li>
                  <li>Esquemas de luz para productos brillantes y mate.</li>
                  <li>Cómo crear fondos blancos y negros perfectos.</li>
                </ul>
              </div>

              <div className="class-card">
                <h3>Clase 7: Fotografía de Moda con Flash</h3>
                <p>
                  <strong>Objetivo:</strong> Crear efectos de iluminación para moda y retratos.
                </p>
                <ul>
                  <li>Uso de luces de recorte para resaltar contornos.</li>
                  <li>Efectos con luces duras y luces suaves.</li>
                  <li>Esquemas de iluminación usados en revistas de moda.</li>
                </ul>
              </div>

              <div className="class-card">
                <h3>Clase 8: Fotografía de Alimentos con Flash</h3>
                <p>
                  <strong>Objetivo:</strong> Iluminar alimentos para que luzcan apetitosos.
                </p>
                <ul>
                  <li>Técnicas para resaltar texturas y colores.</li>
                  <li>Uso de rebotadores y luz lateral para dar volumen.</li>
                  <li>Cómo evitar sombras duras en platos y bebidas.</li>
                </ul>
              </div>

              <div className="class-card">
                <h3>Clase 9: Fotografía Publicitaria con Flash</h3>
                <p>
                  <strong>Objetivo:</strong> Crear imágenes impactantes para publicidad.
                </p>
                <ul>
                  <li>Uso de múltiples flashes para control absoluto de la luz.</li>
                  <li>Efectos de iluminación creativa con geles de colores.</li>
                  <li>Fotografía de alto contraste para impacto visual.</li>
                </ul>
              </div>

              <div className="class-card">
                <h3>Clase 10: Proyecto Final y Revisión</h3>
                <p>
                  <strong>Objetivo:</strong> Aplicar todo lo aprendido en una sesión personalizada.
                </p>
                <ul>
                  <li>Cada estudiante elige un estilo y hace su propia sesión.</li>
                  <li>Revisión de las mejores fotos y ajustes finales.</li>
                  <li>Certificación y feedback final.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="instructor">
          <div className="container">
            <h2>Tu Instructor</h2>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-04%20at%2010.27.32%E2%80%AFAM-QElqpwAbsGRSOgym5Vrvm8gEFWGMPS.png"
              alt="Foto del Instructor"
              width={200}
              height={200}
              className="instructor-photo"
              priority
            />
            <h3>Nombre del Instructor</h3>
            <p>
              Instructor de fotografía por más de 8 años de cursos de fundamentos, procesamiento digital y flash
              portátil.
            </p>
          </div>
        </section>

        <section id="materials">
          <div className="container">
            <h2>Materiales Necesarios</h2>
            <ul>
              <li>Cámara con zapata para flash (DSLR o Mirrorless)</li>
              <li>Flash portátil (manual o TTL)</li>
              <li>Modificadores de luz (softbox, reflectores, geles de colores)</li>
              <li>Transmisores de flash (si se usan flashes fuera de cámara)</li>
            </ul>
          </div>
        </section>

        <section id="results">
          <div className="container">
            <h2>Resultados Esperados</h2>
            <ul>
              <li>Dominio completo del flash portátil en diferentes escenarios</li>
              <li>Capacidad para iluminar sujetos y objetos de forma creativa y profesional</li>
              <li>Habilidad para realizar sesiones de fotografía publicitaria y de retrato con flash</li>
            </ul>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <h2>¿Listo para Empezar?</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Nombre" required />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Mensaje" required></textarea>
              {formStatus.message && (
                <div className={`alert ${formStatus.type === "success" ? "alert-success" : "alert-error"}`}>
                  {formStatus.message}
                </div>
              )}
              <button type="submit">Enviar</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 Curso Completo de Flash Portátil para Fotografía. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}

