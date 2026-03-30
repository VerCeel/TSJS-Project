import { Chart } from "chart.js/auto";
import type { Stock } from "../models/stock.js";
import { showError } from "../errors/errors.js";

let chart: Chart;

// affiche 2 actions differentes
export function graphChart(
  name1: Stock,
  name2: Stock,
  chartType: "line" | "bar",
) {
  try {
    //recupere le canvas du dom
    const canvas = document.getElementById("lineCanvas") as HTMLCanvasElement;

    // remet le canvas apres selection
    if (chart) {
      chart.destroy();
    }

    // nouveau graph apres selection
    chart = new Chart(canvas, {
      type: chartType,
      data: {
        // ? x: la date, y: le prix
        labels: name1.history.map((item) => item.date),
        datasets: [
          {
            // action 1
            label: name1.name,
            data: name1.history.map((item) => item.price),
            borderColor: "#ef4444", 
            backgroundColor: "rgba(239,68,68,0.25)",
            pointBackgroundColor: "#ef4444",
            pointBorderColor: "#ffffff",
            borderWidth: 2,
          },
          {
            // action 2
            label: name2.name,
            data: name2.history.map((item) => item.price),
            borderColor: "#10b981", 
            backgroundColor: "rgba(16,185,129,0.25)", 
            pointBackgroundColor: "#10b981",
            pointBorderColor: "#ffffff",
            borderWidth: 2,
          },
        ],
      },
    });
  } catch (error: unknown) {
    console.error("Erreur graphChart :", error);
    if (error instanceof Error) {
      showError(error.message);
    } else {
      showError("Erreur inconnue dans le graphique");
    }
  }
}
