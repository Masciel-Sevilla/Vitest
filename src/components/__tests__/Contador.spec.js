import { mount } from "@vue/test-utils"; // Permite montar el componente como si se usara en el navegador
import Contador from "../Contador.vue"; // Importa el componente a probar
import { describe, it, expect } from "vitest"; // Funciones de prueba de Vitest

describe("Contador Pruebas", () => {
  it("Debe renderizar el componente correctamente", () => {
    const wrapper = mount(Contador); // Monta el componente
    expect(wrapper.find("h2").text()).toBe("Contador: 0"); // Verifica que el contador empiece en 0
    expect(wrapper.findAll("button").length).toBe(3); // Verifica que el haya 3 botones
  });

  it("Debe incrementar el contador", async () => {
    const wrapper = mount(Contador);
    await wrapper.find("button#increment").trigger("click"); // Simula clic en botón "incrementar"
    expect(wrapper.find("h2").text()).toBe("Contador: 1"); // Espera que el contador sea 1
  });
  it("No debe permitir contador negativo", async () => {
    const wrapper = mount(Contador);
    await wrapper.find("button#decrement").trigger("click");
    expect(wrapper.find("h2").text()).toBe("Contador: 0"); // Verifica que sigue en 0
  });
  it("Debe reiniciar el contador", async () => {
    const wrapper = mount(Contador);
    await wrapper.find("button#increment").trigger("click"); // Aumenta a 1
    await wrapper.find("button#reset").trigger("click"); // Resetea
    expect(wrapper.find("h2").text()).toBe("Contador: 0"); // Espera que sea 0
  });
});
