import { useEffect, useState } from "react";
import "./courseDetails.css";
import ReactPlayer from "react-player";
import ChatBot from "../chatbot/chatbot";
import { useParams, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../Api/api";
import { CiSettings } from "react-icons/ci";
import Coursecontents from "../Meeting/Coursecontents";
import { jwtDecode } from "jwt-decode";
import { ReactComponent as Menu } from "../../Assests/Icons/menu.svg";

export default function CDDetails() {
  const [clicked, setclicked] = useState(false);
  const [menu, setMenu] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [Data, setData] = useState(null);
  const [completed_lessons, setcompleted_lessons] = useState([]);
  const [count, setcount] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [ALLCHAPTER, setALLCHAPTER] = useState([]);
  const [courseId, setcourseId] = useState();

  const [url, seturl] = useState();
  const params = useParams();
  let completed = [];
  let allchapters = [];

  useEffect(() => {
    async function Fetchdata() {
      let login = localStorage.getItem("COURSES_USER_TOKEN");
      if (login) {
        let token = jwtDecode(login);
        let url1 = BASE_URL + "/user/" + token.email + "/" + params.slug;

        const data = await fetch(url1);
        const response = await data.json();
        // console.log(response);
        if (response?.data?.course) {
          setcourseId(response?.data?.course?._id);
          response?.data?.completed_lessons?.forEach((val) => {
            completed.push(val);
          });
        }

        if (response?.data?.course) {
          response?.data?.course?.curriculum?.forEach((val) => {
            val?.lessons?.map((it) => {
              // console.log("it",val);
              allchapters.push({
                video: it?.video,
                _id: it?._id,
              });
            });
          });
        }
        console.log("all", allchapters[0]?.video);
        setALLCHAPTER(allchapters);
        seturl(allchapters[0]?.video);
        setData(response?.data?.course);
        setcompleted_lessons(response?.data?.completed_lessons);
        setVideoUrl(response?.data?.course?.curriculum[0]?.lessons[0]?.video);
        // console.log("data", data && (BASE_URL+'/videos/'+ data[0]?.lessons[0]?.video));
      }
    }
    Fetchdata();
  }, []);

  console.log(allchapters);
  const handleVideoEnded = async () => {
    setcount(count + 1);
    seturl(ALLCHAPTER[count + 1]?.video);
    completed_lessons.push([...ALLCHAPTER], ALLCHAPTER[count + 1]?._id);

    try {
      let login = localStorage.getItem("COURSES_USER_TOKEN");
      if (login) {
        let url = BASE_URL + "/lessoncompleted";
        let bodydata = { courseId, lessonId: ALLCHAPTER[count + 1]?._id };
        const data1 = await fetch(url, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + login,
          },
          body: JSON.stringify(bodydata),
        });
        const response = await data1.json();
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function ClickSection(id) {
    if (!clicked) {
      setclicked(true);
      let inner = document.getElementById(id);
      // console.log(inner);
      inner.style.display = "none";
    } else {
      setclicked(false);
      let inner = document.getElementById(id);

      // console.log(inner);
      inner.style.display = "block";
    }
  }
  const handleDuration = (duration) => {
    // setDuration(duration);
    console.log(duration);
  };

  const toggleMenu = () => {
    // if (window.innerWidth <= 480) {
    setMenu((prevClicked) => !prevClicked);
    // console.log("Menu toggled"); 
    // }
  };


  return (
    <>
      <div className="CCD-container py-10 px-16 xsm:p-[5%] xsm:h-[42vh]">
        <div className="CCD-content flex gap-5">
          <div className="CCD-content-left 2xl:w-[55%] xsm:w-[100%]">
            <div className="relative h-[100%] shadow-lg xsm:h-[35vh]">
              <ReactPlayer
                height="100%"
                width="100%"
                className="shadow-2xl"
                playing={true}
                controls={true}
                autoPlay={true}
                url={url}
                onDuration={handleDuration}
                onEnded={handleVideoEnded}
                config={{
                  file: {
                    attributes: {
                      controlsList: "nodownload" // Disable download option
                    }
                  }
                }}
              />
              {/* <div className="absolute right-0 bottom-10">
                                <ChatBot className="w-fit" />
                            </div> */}
            </div>
          </div>

          {window.innerWidth <= 480 ? (
            menu ? (
              <div className="w-[45%]  h-[80vh] overflow-y-auto">
                <Coursecontents
                  data={Data?.curriculum}
                  completed_lessons={completed_lessons}
                  setMenu={setMenu}
                />
              </div>
            ) : <></>
          ) : (
            <div className="w-[45%]  h-[80vh] overflow-y-auto">
              <Coursecontents
                data={Data?.curriculum}
                completed_lessons={completed_lessons}
                setMenu={setMenu}
              />
            </div>
          )}

        </div>
      </div>
      <div className="h-full w-[72vw] px-16 xsm:px-5 xsm:w-full">
        <div className="CCD-Header-container flex justify-evenly">
          <div className="w-[100%] xsm:mb-10">
            <div className=" mt-8 xsm:mt-0">
              <div className="bg-[#E2FFF1] rounded-2xl py-6 px-12 flex justify-between items-center xsm:py-3 xsm:px-5 xsm:rounded-md">
                <div className="space-y-2 xsm:space-y-0">
                  <p
                    className={`font-pop font-semibold text-[22px] text-[#1DBF73] xsm:text-[10px]`}
                  >
                    {Data?.title}{" "}
                  </p>
                  <div className="flex space-x-4">
                    <p className="font-pop text-[#1DBF73] text-[14px] xsm:text-[8px]">
                      {Data?.curriculum[0]?.lessons?.length} Lesson
                    </p>
                    <p className="font-pop text-[#1DBF73] text-[14px] xsm:text-[8px]">
                      6h 30min
                    </p>
                  </div>
                </div>
                {window.innerWidth <= 480 && (
                  <div className="menu-icon" onClick={toggleMenu}>
                    <Menu />
                  </div>
                )}
                {console.log("Menu state:", menu)}
              </div>
            </div>

            <div className="CCD-Main-container mt-10 px-2 text-justify xsm:mt-0 xsm:py-3 xsm:px-1">
              <div className="CCD-Main-container-content">
                <p className="xsm:text-[8px]">{Data?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
