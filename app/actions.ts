"use server"

import { supabase } from "../lib/supabaseClient"

export async function submitRegistration(formData: FormData) {
  if (!supabase) {
    console.error("El cliente de Supabase no está inicializado. Verifica tus variables de entorno.")
    return {
      success: false,
      message: "Error de configuración del servidor. Por favor, contacte al administrador.",
    }
  }

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  try {
    const { data, error } = await supabase.from("registrations").insert([{ name, email, message }])

    if (error) throw error

    return { success: true, message: "Registro enviado correctamente" }
  } catch (error) {
    console.error("Error al enviar el registro:", error)
    return {
      success: false,
      message: "Error al enviar el registro. Por favor, intente nuevamente",
    }
  }
}

