import { useState } from "react";
import Img1 from "../../Assets/Images/papheaderbg.png";
import styled from "styled-components";
import Test from "../Test/Test";
import { useNavigate } from "react-router-dom";

export default function Pap(){

    const [clicked, setclicked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    let navigate=useNavigate()

    const [formValues, setFormValues] = useState({
      name: "",
      email: "",
      college: "",
      degree: "",
      branch: "",
      yearOfPassing: "",
      fieldOfStudy: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted:", formValues);
    };

    const openModal=()=>{
      setIsModalOpen(true);
    }
    const closeModal=()=>{
      setIsModalOpen(false);
    }
function handleForm(){
  navigate('/test')
}
    // function ClickSection(id) {
    //     if (!clicked) {
    //       setclicked(true);
    //       let droptext = document.getElementById(id);
    //       let droptop = document.getElementById(id+'ind');
    //       console.log(droptop);
    //       console.log(droptext);
    //       droptext.style.display = "none";
    //       droptop.style= "border-bottom: 2px solid #696984;";
    //     } else {
    //       setclicked(false);
    //       let droptext = document.getElementById(id);
    //       let droptop = document.getElementById(id+'ind');
    //       droptext.style.display = "block";
    //       droptop.style= "border-bottom: none;";
    //     }
    //   }

    function ClickSection(id) {
        const toggleContent = document.getElementById(id+'content');
      
        if (!clicked) {
          setclicked(true);
          toggleContent.style.display = "block";
        } else {
          setclicked(false);
          toggleContent.style.display = "none";
        }
      }

    return (
        <div >
            {/* Header */}
            <div 
                className="h-[210px] flex flex-col justify-center xsm:h-[100px]" 
                style={{ 
                    backgroundImage: `url(${Img1})`,
                    backgroundSize:'cover'
                } }
            >
                <div className="font-pop font-semibold text-white text-[44px] pl-20 xsm:text-[20px] xsm:pl-4">Pay After Placement</div>
            </div>
            {/* Main */}
            <div className="px-[8%] my-6 xsm:px-[2%]">
                <div>
                    <p className="font-pop font-semibold text-[32px] xsm:text-[14px]">How this works ? </p>
                </div>
                {/* Agreement */}
                <div className="flex justify-between">
                    <div className="w-[55%] mt-10 flex flex-col gap-4">
                        <div>
                            <p className="font-pop font-semibold text-[26px] text-[#2D3436] xsm:text-[12px]">Pay After Placement Agreement</p>
                        </div>
                        <div className="flex items-center gap-4 xsm:gap-2">
                            <div className="w-[7%]">
                                <img src="../Icons/handwithmoney.svg"/>
                            </div>
                            <div className="w-[90%]">
                                <div>
                                    <p className="font-nu font-semibold text-[22px] xsm:text-[10px]">Minimum CTC</p>
                                    <p className="font-nu font-medium text-[16px] xsm:text-[7px]">If your salary is above the CTC of ₹3,50,000/-, the PAP monthly payments come into effect.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 xsm:gap-2">
                            <div className="w-[7%]">
                                <img src="../Icons/greencalender.svg"/>
                            </div>
                            <div className="w-[90%]">
                                <div>
                                    <p className="font-nu font-semibold text-[22px] xsm:text-[10px]">1 Year</p>
                                    <p className="font-nu font-medium text-[16px] xsm:text-[7px]">If you don’t get a job offer within 1 year of course  you pay nothing for your learning at  Hoping Minds.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 xsm:gap-2">
                            <div className="w-[7%]">
                                <img src="../Icons/electricbolt.svg"/>
                            </div>
                            <div className="w-[90%]">
                                <div>
                                    <p className="font-nu font-semibold text-[22px] xsm:text-[10px]">Enforcement</p>
                                    <p className="font-nu font-medium text-[16px] xsm:text-[7px]">In the event you are not working or if your income drops below the CTC mentioned in the Pay After Placement Agreement the monthly payments pause.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[40%] relative">
                        <div className="absolute left-[37%] top-[8%] z-10 xsm:left-[14%] xsm:top-[15%]">
                            <img className="w-[310px] h-[180px] xsm:w-[110px] xsm:h-[85px]" src="../img/papagreeimg1.png"/>
                        </div> 
                        <div className="absolute top-[60%] z-10">
                            <img className="w-[310px] h-[180px] xsm:w-[110px] xsm:h-[85px]" src="../img/papagreeimg2.png"/>
                        </div>
                        <div className="bg-[#E2FFF1] rounded-xl w-[70%] h-[80%] absolute left-[25%] top-[20%] xsm:h-[65%] xsm:left-[15%]"></div>
                    </div>
                </div>
                {/* course fee */}
                <div className="flex my-24 justify-between">
                    <div className="w-[40%] relative mt-12">
                        <div className="bg-[#E2FFF1] rounded-xl w-[75%] h-full absolute top-[-12%] left-[10%] z-[-2]"></div>
                        <div className="z-10 h-full">
                            <img className="w-[75%] h-full" src="../img/papcoursefeeimg1.png"/>
                        </div>
                    </div>
                    <div className="w-[55%] flex flex-col gap-6">
                        <div>
                            <p className="font-pop font-semibold text-[28px] text-[#2D3436]">Course Fee</p>
                        </div>
                        <div className=" flex flex-col gap-6">
                            <p className="font-nu text-[17px]">These only take effect once you start earning above the PAP threshold amount for your course.</p>
                            <div className="flex flex-col gap-6 ml-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-4 h-4 rounded-full bg-[#1DBF73]"></div>
                                    <p className="font-nu text-[17px]">Your Salary range   :  &gt; 5Lpa</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-4 h-4 rounded-full bg-[#1DBF73]"></div>
                                    <p className="font-nu text-[17px]">Monthly Payable   :  ₹ 6,944</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-4 h-4 rounded-full bg-[#1DBF73]"></div>
                                    <p className="font-nu text-[17px]">Tenure   :  ₹ 6,944</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-4 h-4 rounded-full bg-[#1DBF73]"></div>
                                    <p className="font-nu text-[17px]">Total Payable Fee   :  ₹2,50,00</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="font-nu text-[17px]">CTC (Cost to Company) is defined as the total gross income earned, including but not pmited, to variable pay, compensations and ESOPs. Find out more in the FAQ section.</p>
                        </div>
                    </div>
                </div>
                {/* Dropout clauses */}
                <div className="flex  justify-between my-36">
                    <div className="w-[65%]  flex flex-col gap-6">
                        <div>
                            <p className="font-pop font-semibold text-[24px] text-[#2D3436]">Dropout Clauses</p>
                        </div>
                        <div>
                            <p className="font-nu text-[17px]">If you realise that Masai is not for you, you may withdraw from our courses at anytime. Here is how the fee works in case you drop-out</p>
                        </div>
                        <div className="flex flex-col gap-4 ml-6">
                            <div className="flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full bg-[#1DBF73]"></div>
                                <p className="font-nu text-[17px]">Week 1-5 :  No Payment</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full bg-[#1DBF73]"></div>
                                <p className="font-nu text-[17px]">Week 6-20  :  50000</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full bg-[#1DBF73]"></div>
                                <p className="font-nu text-[17px]">Week 21 - 30/35  :  100% PAP Amount</p>
                            </div>
                        </div>
                        <div>
                            <p className="font-nu text-[17px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                        </div>
                    </div>
                    <div className="w-[30%] relative">
                            <div className="absolute  z-10 translate-x-32">
                                <img className="rounded-xl w-[85%] h-full" src="../img/papclausesimg1.png" alt="image"/>
                            </div>
                            <div className="absolute top-[64%] z-10  translate-x-[-15%]">
                                <img className="rounded-xl w-[85%] h-full z-10" src="../img/papclausesimg1.png" alt="image"/>
                            </div>
                            <div className="bg-gradient-to-outside w-[70%] h-[70%] absolute top-[30%] left-[18%] opacity-55"></div>
                    </div>
                </div>
                {/* Agreement */}
                <div className="my-12 relative">
                    <div className="bg-black rounded-xl px-24 py-14 text-white w-full flex flex-col items-center gap-6">
                        <div>
                            <p className="font-pop font-semibold text-[34px]">Pay After Placement(PAP) Agreement</p>
                        </div>
                        <div>
                            <p className="font-nu text-[16px] leading-8">PAP Agreement is a legal contract that makes education at Masai outcome-based. It is not an education loan, as you do not have to pay any interest & you do not require any collaterals. If you do not get placed within 1 year of course completion, your learning with Masai is completely free.</p>
                        </div>
                        <div className="">
                            <button onClick={openModal} className="bg-white text-black font-pop font-medium text-[18px] px-6 py-2 rounded-full">Export Now</button>

                            

                        </div>
                    </div>
                </div>
                {/* FAQ */}
                <div className="my-12 flex flex-col items-center">
                    <div>
                        <p className="font-pop font-semibold text-[26px] text-[#2D3436]">Frequently Asked Questions</p>
                    </div>
                    <div className=" w-full">
                        <div className="faq1 w-full">
                            <div className=" w-full">
                                <div 
                                    onClick={() => ClickSection(1)}
                                    id={1+'ind'}
                                    className="drop-top flex justify-between items-center w-full py-4 cursor-pointer"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 rounded-full bg-[#1DBF73]"></div>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                    <div>
                                        <img src="../Icons/papdropdown.svg" alt="" />
                                    </div>
                                </div>
                                <div className="px-6 py-4 hidden" id={1+'content'}>
                                    <p className="font-nu text-[#696984] text-[11px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                </div>
                            </div>
                            <hr className="border-[1px]"/>
                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <Wrapper>
                  <div className="modal bg-black">
                    <div className="form-container w-[40%] rounded-lg overflow-hidden">
                      <div className="img">
                        <img src="../img/papmodalbg.jpg" alt="" />
                        <p className="button">
                          Pay After Placement Registration Form{" "}
                        </p>
                        <button className="close" onClick={closeModal}>
                          &times;
                        </button>
                      </div>
                      <div className="content">
                        <form className="form" onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label className="text-black" htmlFor="name">Name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formValues.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <label className="text-black" htmlFor="email">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formValues.email}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <label className="text-black" htmlFor="college">College</label>
                            <input
                              type="text"
                              id="college"
                              name="college"
                              value={formValues.college}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <label className="text-black" htmlFor="degree">Degree</label>
                            <input
                              type="text"
                              name="yearOfPassing"
                              value={formValues.degree}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <label className="text-black" htmlFor="branch">Branch</label>
                            <input
                              type="text"
                              name="yearOfPassing"
                              value={formValues.branch}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <label className="text-black" htmlFor="yearOfPassing">Year of Passing</label>
                            <input
                              type="text"
                              id="yearOfPassing"
                              name="yearOfPassing"
                              value={formValues.yearOfPassing}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <label className="text-black" htmlFor="fieldOfStudy">Field of Study</label>
                            <input
                              type="text"
                              name="yearOfPassing"
                              value={formValues.fieldofStudy}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="flex justify-center">
                          <button onClick={handleForm} type="submit" className="btn">
                            Submit
                          </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Wrapper>
          
            )}
        </div>
    );
};

const Wrapper = styled.div`
  // width: 50%;
  position:fixed;
  top:70%;
  left:30%;
  // transform:translate(-50%,-50%)
  z-index:999;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }

  .content {
    padding: 10px 100px;
  }

  .form-container {
    position: fixed;
    top:12%;
    // left:30%;
    // padding: 0% 2.2% 2.5% 2.2%;
    // margin-top: -2.3rem;
    z-index: 999;
    background-color: #fffdfd;
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.7);
    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 0 auto;
      padding: 0 5% 10% 5%;
      margin-top: 1rem;
      position: relative;
     
    }
  }
  .img {
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  .img img {
    width: 110%;
    margin: 0 auto;
    // margin-left: -5%;
    height: 80px;
  }
  .img .button {
    position: absolute;
    top: 35%;
    left: 5%;
  }

  .close {
    position: absolute;
    cursor: pointer;
    right: 1%;
    top: 4%;
    font-size: 2rem;
    color: #e3ebe9;
    border: none;
    z-index: 100;
    background-clip: text;
  }
  .button {
    border: none;
    background-clip: text;
    color: #eaf1ea;
    font-size: 1.5rem;
    font-weight: bolder;
  }

  .form-group {
    margin-bottom: 0.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.2rem;
    font-size: 0.8rem;
  }

  input {
    outline: none;
    background-color: #e2fff1;
    padding: 0.2rem 0.5rem;
    font-size: 1rem;
    width: 100%;
  }

  .form-container .btn {
    // position: absolute;
    margin-top: 0.4rem;
    left: 40%;
    padding: 0.3rem 2rem;
    font-size: 1rem;
    background-color: #15f2ac;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }

  .form-container .btn:hover {
    background-color: #75ebd2;
    
  }
`;