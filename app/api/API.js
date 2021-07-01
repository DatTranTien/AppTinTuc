 const getAllBreakingNews = () => {
    return fetch('http://localhost:3000/getAllBreakingNews')
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };
//   console.log(getAllBreakingNews())

//   export const getAllTechNews = () => {
//     return fetch('http://localhost:3000/getAllTechNews')
//       .then((response) => response.json())
//       .then((json) => {
//         return json;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   export const getAllPoliticalNews = () => {
//     return fetch('http://localhost:3000/getAllPoliticalNews')
//       .then((response) => response.json())
//       .then((json) => {
//         return json;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   export const getAllEntertaimentNews = () => {
//     return fetch('http://localhost:3000/getAllEntertaimentNews')
//       .then((response) => response.json())
//       .then((json) => {
//         return json;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   export  {getAllBreakingNews(),getAllEntertaimentNews,getAllPoliticalNews,getAllTechNews}