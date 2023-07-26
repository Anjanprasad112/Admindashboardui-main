import React from 'react'
import { FaTachometerAlt, FaRegSun, FaWrench, FaStickyNote, FaRegChartBar, FaRegCalendarAlt, FaChevronRight, FaChevronLeft, FaBolt,FaMapMarker ,FaUserAlt,FaFileAlt,FaUserPlus} from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    let navigate = useNavigate();
    const cases = () => {
        let pathtwo = `/cases`;
        navigate(pathtwo);
    }
    const newcase = () => {
        let pathtwo = `/newcase`;
        navigate(pathtwo);
    }
    const dashboard = () => {
        let pathtwo = `/`;
        navigate(pathtwo);
    }
    const maps = () => {
        let pathtwo = `/maps`;
        navigate(pathtwo);
    }
    const accounts = () => {
        let pathtwo = `/accounts`;
        navigate(pathtwo);
    }
    const addaccount = () => {
        let pathtwo = `/addaccount`;
        navigate(pathtwo);
    }
    const settings = () => {
        let pathtwo = `/settings`;
        navigate(pathtwo);
    }

    return (
        <div className='bg-[#4E73DF] px-[25px] h-screen'>
            <div className=' p-1 flex items-center justify-center border-b-2 border-[#EDEDED]/[0.3]'>
                <h1 className='text-white text-xl font-extrabold cursor-pointer'>A 2 Z ASSIST</h1>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] border-b-2 border-[#EDEDED]/[0.3] cursor-pointer' onClick={dashboard}>
                <FaTachometerAlt color='white' />
                <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
            </div>
            <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'> INTERFACE</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-3' onClick={cases}>
                        <FaRegSun color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Cases </p>
                    </div>
                    
                    {/* <FaChevronRight color='white' /> */}
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer' onClick={maps}>
                    <div className='flex items-center gap-3'>
                        <FaMapMarker color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Maps</p>
                    </div>
                    {/* <FaChevronRight color='white' /> */}
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer' onClick={settings}>
                    <div className='flex items-center gap-3'>
                        <FaWrench color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Settings</p>
                    </div>
                    {/* <FaChevronRight color='white' /> */}
                </div><div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer ' onClick={accounts}>
                    <div className='flex items-center gap-3'>
                        <FaUserAlt color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Accounts</p>
                    </div>
                    {/* <FaChevronRight color='white' /> */}
                </div><div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-3'>
                        <FaFileAlt color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Reports</p>
                    </div>
                    {/* <FaChevronRight color='white' /> */}
                </div>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-3' onClick={newcase}>
                        <FaUserPlus color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>New Case</p>
                    </div>
                    {/* <FaChevronRight color='white' /> */}
                </div>

                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-3' onClick={addaccount}>
                        <FaUserPlus color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Add Account</p>
                    </div>
                    {/* <FaChevronRight color='white' /> */}
                </div>
            </div>
            


            <div className='pt-[15px]'>
                <div className='flex items-center justify-center'>
                    <div className='h-7 w-6 bg-[#3C5EC1] rounded-full flex items-center justify-center cursor-pointer'>
                        <FaChevronLeft color='white' />
                    </div>
                </div>
            </div>




            {/* <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
                <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'> ADDONS</p>
                <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
                    <div className='flex items-center gap-[10px]'>
                        <FaStickyNote color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Pages</p>
                    </div>
                    <FaChevronRight color='white' />
                </div>
                <div className='flex items-center gap-[10px] py-[15px]  cursor-pointer'>
                    <FaRegChartBar color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Charts</p>
                </div>
                <div className='flex items-center gap-[10px] py-[15px] cursor-pointer'>
                    <FaRegCalendarAlt color='white' /> <p className='text-[14px] leading-[20px] font-normal text-white'>Tables</p>
                </div>
            </div>
            <div className='pt-[15px]'>
                <div className='flex items-center justify-center'>
                    <div className='h-7 w-5 bg-[#3C5EC1] rounded-full flex items-center justify-center cursor-pointer'>
                        <FaChevronLeft color='white' />
                    </div>
                </div>
            </div> */}
           
        </div>
    )
}

export default Sidebar