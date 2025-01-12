// import React, { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import BlogData from "../BlogData"
// import EmptyFile from '../../../common/Empty/Empty';
// //import HeadTitle from "../../../common/HeadTitle/HeadTitle";
// import { useParams } from "react-router-dom"

// const BlogSingle = () => {
//   const { id } = useParams()
//   const [item, setItem] = useState(null)

//   useEffect(() => {
//     let item = BlogData.find((item) => item.id === parseInt(id))
//     if (item) {
//       setItem(item)
//     }
//   }, [id])
//   return (
//     <>
//       {/* <HeadTitle /> */}

//       {item ? (
//         <section className='single-page top'>
//           <div className='container'>
//             <Link to='/blog' className='primary-btn back'>
//               <i className='fas fa-long-arrow-alt-left'></i> Go Back
//             </Link>

//             {/* --------- main-content--------- */}

//             <article className='content flex_space'>
//               <div className='main-content'>
//                 <img src={item.cover} alt='' />

//                 <div className='category flex_space'>
//                   <span>{item.date}</span>
//                   <label>{item.catgeory}</label>
//                 </div>

//                 <h1> {item.title} </h1>
//                 <p>{item.desc}</p>
               

                

               
//               </div>
//               {/* --------- main-content--------- */}

//               {/* --------- side-content--------- */}
//               <div className='side-content'>
//                 <div className='category-list'>
//                   <h1>Categories</h1>
//                   <hr />
//                   <ul>
//                     {BlogData.map((item) => {
//                       return (
//                         <li>
//                           <i className='far fa-play-circle'></i>
//                           {item.catgeory}
//                         </li>
//                       )
//                     })}
//                   </ul>
//                 </div>
//               </div>

//               {/* --------- side-content--------- */}
//             </article>
//           </div>
//         </section>
//       ) : (
//         <EmptyFile />
//       )}
//     </>
//   )
// }

// export default BlogSingle

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BlogData from "../BlogData";
import EmptyFile from "../../../common/Empty/Empty";

const BlogSingle = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      {item ? (
        <section className="single-page top">
          <div className="container">
            <Link to="/blog" className="primary-btn back">
              <i className="fas fa-long-arrow-alt-left"></i> Go Back
            </Link>

            {/* --------- main-content--------- */}
            <article className="content flex_space">
              <div className="main-content">
                <img src={item.cover} alt={item.title} />

                <div className="category flex_space">
                  <span>{item.date}</span>
                  <label>{item.category}</label>
                </div>

                <h1>{item.title}</h1>
                <p>{item.desc}</p>

                {/* Render additional images if available */}
                {item.additionalImages && item.additionalImages.length > 0 && (
                  <div className="additional-images">
                    <h3>More Photos</h3>
                    <div className="image-gallery">
                      {item.additionalImages.map((image, index) => (
                        <img key={index} src={image} alt={`Additional ${index + 1}`} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* --------- main-content--------- */}

              {/* --------- side-content--------- */}
              <div className="side-content">
                <div className="category-list">
                  <h1>Categories</h1>
                  <hr />
                  <ul>
                    {BlogData.map((item) => (
                      <li key={item.id}>
                        <i className="far fa-play-circle"></i>
                        {item.category}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* --------- side-content--------- */}
            </article>
          </div>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  );
};

export default BlogSingle;
