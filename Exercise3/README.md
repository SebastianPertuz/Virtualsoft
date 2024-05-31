# Proyecto de Pruebas con Playwright

Este proyecto contiene pruebas automatizadas utilizando Playwright. A continuación, se detallan los pasos para configurar el ambiente y ejecutar las pruebas.

## Requisitos previos

Asegúrate de tener instalados los siguientes componentes:

- [Node.js](https://nodejs.org/) (versión 12 o superior)
- [npm](https://www.npmjs.com/) (viene con Node.js)

## Instalación del Ambiente

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/SebastianPertuz/Virtualsoft
    cd Exercise3
    ```

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

3. Instala los navegadores necesarios para Playwright:

    ```bash
    npx playwright install
    ```

## Ejecución de las Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

```bash
npx playwright test
