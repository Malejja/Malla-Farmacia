
const malla = {
  "1° semestre": [
    { nombre: "Principios de Química", clave: "Q1", creditos: 3 },
    { nombre: "Lab técnicas básicas", clave: "LQ1", creditos: 3, C: ["Q1"] },
    { nombre: "Cálculo diferencial", clave: "CALC1", creditos: 4 },
    { nombre: "Biología molecular y celular", clave: "BIO1", creditos: 3 },
    { nombre: "Introducción a la farmacia", clave: "FAR1", creditos: 2 },
    { nombre: "Libre elección", clave: "LE1", creditos: 3 }
  ],
  "2° semestre": [
    { nombre: "Química Orgánica I", clave: "QO1", creditos: 3, P: ["Q1"] },
    { nombre: "Lab orgánica", clave: "LQO1", creditos: 3, P: ["LQ1"], C: ["QO1"] },
    { nombre: "Principios de Análisis químico", clave: "PAQ", creditos: 3, P: ["Q1"] },
    { nombre: "Mecánica y ondas para biociencias", clave: "MEC1", creditos: 4 },
    { nombre: "Bioestadística fundamental", clave: "BIOEST", creditos: 3 },
    { nombre: "Libre elección", clave: "LE2", creditos: 3 }
  ],
  "3° semestre": [
    { nombre: "Química Orgánica II", clave: "QO2", creditos: 3, P: ["QO1"] },
    { nombre: "Lab Principios análisis químico", clave: "LPAQ", creditos: 3, P: ["LQ1"], C: ["PAQ"] },
    { nombre: "Bioquímica", clave: "BIOQ", creditos: 3, P: ["BIO1"], C: ["QO2"] },
    { nombre: "Fisicoquímica I", clave: "FIS1", creditos: 3, P: ["PAQ", "CALC1"] },
    { nombre: "Química inorgánica farmacéutica", clave: "QIF", creditos: 2, P: ["Q1", "LQ1"] },
    { nombre: "Optativa de fundamentación", clave: "OPT1", creditos: 3 }
  ],
  "4° semestre": [
    { nombre: "Fisioanatomía", clave: "FA", creditos: 3, P: ["BIOQ"] },
    { nombre: "Microbiología general", clave: "MICG", creditos: 3, P: ["BIOQ"] },
    { nombre: "Operaciones unitarias farmacéuticas", clave: "OUF", creditos: 2, P: ["FIS1", "MEC1"] },
    { nombre: "Farmacognosia y fitoquímica", clave: "FITO", creditos: 4, P: ["BIOQ", "QO2", "LQO1"] },
    { nombre: "Optativa de fundamentación", clave: "OPT2", creditos: 3 },
    { nombre: "Libre elección", clave: "LE3", creditos: 3 }
  ],
  "5° semestre": [
    { nombre: "Fisiopatología", clave: "FP", creditos: 3, P: ["FA"] },
    { nombre: "Microbiología farmacéutica", clave: "MICF", creditos: 3, P: ["MICG"] },
    { nombre: "Farmacotecnia I", clave: "FT1", creditos: 4, P: ["QO2", "OUF", "QIF"] },
    { nombre: "Farmacia química", clave: "FQ1", creditos: 4, P: ["FITO"] },
    { nombre: "Optativa de fundamentación", clave: "OPT3", creditos: 3 },
    { nombre: "Libre elección", clave: "LE4", creditos: 3 }
  ],
  "6° semestre": [
    { nombre: "Farmacología general", clave: "FARG", creditos: 3, P: ["FP"] },
    { nombre: "Salud pública y farmacia", clave: "SPF", creditos: 2, P: ["FP", "FAR1", "BIOEST"] },
    { nombre: "Farmacotecnia II", clave: "FT2", creditos: 4, P: ["FT1"] },
    { nombre: "Análisis instrumentales farmacéutico", clave: "AIF", creditos: 4, P: ["LPAQ", "FT1", "PAQ"] },
    { nombre: "Biofarmacia y farmacocinética", clave: "BFFK", creditos: 2, P: ["FT1", "FA"], C: ["FARG"] },
    { nombre: "Farmacia química II", clave: "FQ2", creditos: 3, P: ["FQ1"] }
  ],
  "7° semestre": [
    { nombre: "Farmacología especial", clave: "FAE", creditos: 3, P: ["FARG", "MICG"] },
    { nombre: "Gestión servicios farmacéuticos", clave: "GSF", creditos: 2, P: ["SPF"] },
    { nombre: "Legislación farmacéutica", clave: "LEG", creditos: 2, P: ["AIF", "SPF"] },
    { nombre: "Administración farmacéutica", clave: "ADM", creditos: 2, C: ["SPF"] },
    { nombre: "Toxicología", clave: "TOX", creditos: 3, P: ["FARG"] },
    { nombre: "Optativa disciplinar", clave: "OPTD1", creditos: 3 },
    { nombre: "Libre elección", clave: "LE5", creditos: 3 }
  ],
  "8° semestre": [
    { nombre: "Farmacia industrial", clave: "FIND", creditos: 4, P: ["MICF", "AIF", "FT2"], C: ["CAL"] },
    { nombre: "Control de calidad farmacéutico", clave: "CCF", creditos: 4, P: ["AIF", "FT2", "MICF"] },
    { nombre: "Aseguramiento de calidad", clave: "CAL", creditos: 2, P: ["AIF", "ADM"] },
    { nombre: "Optativa disciplinar", clave: "OPTD2", creditos: 3 },
    { nombre: "Libre elección", clave: "LE6", creditos: 3 },
    { nombre: "Libre elección", clave: "LE7", creditos: 3 }
  ],
  "9° semestre": [
    { nombre: "Farmacia hospitalaria", clave: "FH", creditos: 9, P: ["FIND", "GSF", "FAE", "TOX", "LEG", "CAL"] },
    { nombre: "Optativa disciplinar", clave: "OPTD3", creditos: 3 },
    { nombre: "Optativa disciplinar", clave: "OPTD4", creditos: 3 },
    { nombre: "Libre elección", clave: "LE8", creditos: 3 },
    { nombre: "Libre elección", clave: "LE9", creditos: 3 }
  ],
  "10° semestre": [
    { nombre: "Trabajo de grado", clave: "TG", creditos: 8 },
    { nombre: "Libre elección", clave: "LE10", creditos: 3 },
    { nombre: "Libre elección", clave: "LE11", creditos: 3 },
    { nombre: "Libre elección", clave: "LE12", creditos: 3 }
  ]
};

function puedeActivarse(materia, completadas) {
  if (materia.P && !materia.P.every(p => completadas.includes(p))) return false;
  if (materia.C && !materia.C.every(c => completadas.includes(c))) return false;
  return true;
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  const completadas = JSON.parse(localStorage.getItem("completadas") || "[]");

  Object.entries(malla).forEach(([semestre, materias]) => {
    const div = document.createElement("div");
    div.className = "semestre";
    const h2 = document.createElement("h2");
    h2.textContent = semestre;
    div.appendChild(h2);

    let totalCreditos = 0;
    let creditosCursados = 0;

    materias.forEach(m => {
      const divM = document.createElement("div");
      divM.className = "materia";
      divM.textContent = `${m.nombre} (${m.creditos} cr)`;
      divM.dataset.clave = m.clave;

      const completada = completadas.includes(m.clave);
      const habilitada = puedeActivarse(m, completadas);

      totalCreditos += m.creditos;

      if (completada) {
        divM.classList.add("aprobada");
        creditosCursados += m.creditos;
        divM.onclick = () => {
          const idx = completadas.indexOf(m.clave);
          completadas.splice(idx, 1);
          localStorage.setItem("completadas", JSON.stringify(completadas));
          renderMalla();
        };
      } else if (habilitada) {
        divM.classList.add("habilitada");
        divM.onclick = () => {
          completadas.push(m.clave);
          localStorage.setItem("completadas", JSON.stringify(completadas));
          renderMalla();
        };
      } else {
        divM.classList.add("bloqueada");
      }

      div.appendChild(divM);
    });

    const creditosDiv = document.createElement("div");
    creditosDiv.className = "creditos";
    creditosDiv.textContent = `Total: ${totalCreditos} créditos – Completados: ${creditosCursados} créditos`;
    div.appendChild(creditosDiv);

    contenedor.appendChild(div);
  });
}

renderMalla();
