const arrNotebook = require("../../../arrayNumCategory/arrNotebook.json");
const getFetchMain = require("../../../services/getFetchMain");

// http://localhost:5000/api/notebookall - долгий рендер до 10 секунд при каждом запросе

const notebookall = async (req, res) => {
  let newArrnotebooks = [];
  for (let i = 0; i < arrNotebook.length; i++) {
    results = await getFetchMain(arrNotebook[i]).then((data) => data.list);
    const fill = (...items) => items.map((elem) => newArrnotebooks.push(elem));
    fill(...results);
  }

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const chunkProducts = chunk(newArrnotebooks, 50);

  results = res.status(200).json(chunkProducts);
};

module.exports = notebookall;
