// // Types
// import { TablePropsType } from "./TableTypes";

// // Styles
// import "./TableStyles.modules.scss";

// const TableC = ({
//   data,
//   isLoading,
//   setCurrentTutorial,
//   rowClickHandler
// }: TablePropsType) => {
//   return (
//     <>
//       {isLoading ? (
//         <h1>isLoading...</h1>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Title</th>
//               <th>description</th>
//               <th>published</th>
//               <th>See Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.length ? (
//               data.map(({ id, title, description, published }) => (
//                 <tr key={id}>
//                   <td onClick={() => rowClickHandler(id)}>{id}</td>
//                   <td>{title}</td>
//                   <td>{description}</td>
//                   <td>{published ? "Published" : "Not Published"}</td>
//                   <td>
//                     <button
//                       onClick={() => {
//                         setCurrentTutorial({
//                           id,
//                           title,
//                           description,
//                           published
//                         });
//                       }}
//                     >
//                       Open
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <td colSpan="5">NoData</td>
//             )}
//           </tbody>
//         </table>
//       )}
//     </>
//   );
// };

// export default TableC;
