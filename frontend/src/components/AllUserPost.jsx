import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import UserContext from '../context/UserContext';
import GetpostComments from './GetpostComments';
import { FaRegEye } from "react-icons/fa";
// import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { IoEye } from "react-icons/io5";
import ShowSingleBlog from './ShowSingleBlog';
import { Card } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
const AllUserPost = (props) => {
  const [allPosts, setallPosts] = useState([]);

  let ctx = useContext(UserContext)
  let token = ctx.details.token
  // console.log(token)
  const [heartClick, setheartClick] = useState(false);
  const [postSubmited, setPostSubmited] = useState(false);
  const [selectedPostId, setselectedPostId] = useState("");

  let commentRef = useRef()

  let getAllData = async () => {
    let res = await axios.get('http://localhost:8080/posts/getall')
    let data = res.data;
    console.log(data.data)
    setallPosts(data.data)
  }
  useEffect(() => {
    getAllData()
  }, [props.clicked])

  const handleHeart = () => {
    setheartClick(!heartClick)
  }

  const showForm = (id) => {
    setselectedPostId(id)
  }

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

const [selectedEle, setselectedEle] = useState("");
  const showLoading = (ele) => {
    setOpen(true);
    setLoading(true);
    setselectedEle(ele)

    // Simple loading mock. You should add cleanup logic in real world.
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const submitComment = async () => {
    let text = commentRef.current.value;
    console.log(text)
    console.log(token)

    let res = await fetch(`http://localhost:8080/posts/addComment/${selectedPostId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': ctx.details.token
      },
      body: JSON.stringify({ text: text })
    })

    let data = await res.json()
    console.log(data);
    setPostSubmited(!postSubmited)
    // setselectedPostId("")
  }
  return (
    <div className='row justify-content-center gap-2'>
      {
        //           allPosts.map((ele) => {
        //               return <div className="card" style={{ width: '18rem' }}>
        //                   {ele.file.split('/')[4] === 'image' ? <img src={ele.file} className="card-img-top" alt="..." /> :
        //                       <video controls src={ele.file}></video>
        //                   }
        //                   <div className="card-body">
        //                       <h6 className="card-title">{ele.title}</h6>
        //                       {/* <p className="card-text text-truncate">{ele.description}</p> */}
        //                       <a href="#" className="btn btn-primary">View full blog</a>
        //                       <p className='text-secondary my-2'>Author:{ele.userId.name}</p>
        //                       {/* {heartClick===false? <CiHeart onClick={handleHeart} size={30} color='red'/> :  <FaHeart onClick={handleHeart} size={25} color='red'/>}  */}
        //                       {heartClick === false && <CiHeart onClick={handleHeart} size={30} fill='red' color='red' />}
        //                       {heartClick === true && <FaHeart style={{ border: "red" }} onClick={handleHeart} fill='red' size={25} color='red' />}

        //                       <RiMessage2Line onClick={()=>showForm(ele._id)}  />
        //                      {selectedPostId===ele._id && <div>

        //                           <textarea ref={commentRef} placeholder=' enter a comment' ></textarea>
        //                           <button onClick={submitComment}>send</button>
        //                           {/* <GetpostComments  comments ={ele.comments}/> */}
        //                           {ele.comments.map((el)=>{
        //  return <div>
        //       <label htmlFor="">{el.user.name}</label>
        //       <input type="text" value={el.text} />
        //   </div>
        // })}

        //                       </div>}

        //                   </div>
        //               </div>

        //             //   return  <Card key={ele._id} sx={{ maxWidth: 345 }}>
        //             //   <CardHeader
        //             //     avatar={
        //             //       <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //             //         {ele.userId.name.slice(0,1)}
        //             //       </Avatar>
        //             //     }
        //             //     action={
        //             //       <IconButton aria-label="settings">
        //             //         <MoreVertIcon />
        //             //       </IconButton>
        //             //     }
        //             //     title={ele.userId.name}
        //             //     subheader="September 14, 2016"
        //             //   />

        //             //     {
        //             //       ele.file.split('/')[4] === 'image' ?
        //             //        <CardMedia
        //             //       component="img"
        //             //       height="194"

        //             //       image={ele.file}
        //             //       alt="Paella dish"
        //             //     />
        //             //     :
        //             //     <CardMedia
        //             //     component="video"
        //             //     height="194"
        //             //     image={ele.file}
        //             //     alt="Paella dish"
        //             //     controls


        //             //   />
        //             //     }


        //             //   <CardContent>
        //             //     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        //             //       {ele.title}
        //             //     </Typography>
        //             //   </CardContent>
        //             //   <CardActions className='d-flex justify-content-between'>
        //             //     <IconButton aria-label="add to favorites">
        //             //       <FavoriteIcon />
        //             //     </IconButton>
        //             //     <IconButton aria-label="add to favorites">
        //             //       <IoEye onClick={()=>showLoading(ele)}/>
        //             //       {showEle._id===ele._id&&<ShowSingleBlog open={open} loading={loading} setOpen={setOpen} setLoading={setLoading} ele={ele} />}
        //             //     </IconButton>
        //             //     <IconButton aria-label="share">
        //             //       <RiMessage2Line />
        //             //     </IconButton>

        //             //   </CardActions>

        //             // </Card>


        //           })

        allPosts.map((ele) => {
          return <Card key={ele._id} sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={ele.userId.name}
              subheader="September 14, 2016"
            />

            {ele.file.split('/')[4] === 'image' ?
              <CardMedia
                component="img"
                height="194"
                image={ele.file}
                alt="Paella dish"
              />
              :
              <CardMedia
                component="video"
                height="194"
                image={ele.file}
                alt="Paella dish"
                controls
              />
            }


            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {ele.title}
              </Typography>
            </CardContent>
            <CardActions className='d-flex justify-content-between' disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <RiMessage2Line  onClick={()=>showForm(ele._id)}/>
              </IconButton>
              <IconButton aria-label="share">
                <FaRegEye  onClick={()=>showLoading(ele)}/>
               {ele._id===selectedEle._id && <ShowSingleBlog ele={selectedEle}  open={open} setOpen={setOpen} loading={loading} showLoading={showLoading}/>}
              </IconButton>

            </CardActions>

        {ele._id===selectedPostId && <div>
         {ele.comments.map((item)=>{
              return <div>
                <span>{item.text}</span>
                <p>{item.user.name}</p>
              </div>
            })}
         </div>}

          </Card>
        })
      }
    </div>
  )
}

export default AllUserPost
