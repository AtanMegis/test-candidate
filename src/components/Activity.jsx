import React from 'react'
import arrow from '../assets/arrow.png'
import line from '../assets/line.png'

const Activity = () => {
    return (
        <div className="flex flex-col text-white px-6 justify-center">
            <h2 className="p-2 text-2xl">Activity</h2>
            <div className="flex gap-2">
                <img src={arrow} alt={arrow} />
                <p>16% this month</p>
            </div>
            <div className="flex pt-6 gap-4">
                <img src={line} alt={line} className="h-[50%]" />
                <div className="flex flex-col">
                    <p>Nick Mark Mentioned Sara Smith In New Post</p>
                    <span className="text-[#9F9F9F] mb-11">11 JUL 8:10 PM</span>
                    <p>The Post Name was removed by Nick Mark</p>
                    <span className="text-[#9F9F9F] mb-11">11 JUL 9:10 PM</span>
                    <p>Patrick Sulivan Published a New Post</p>
                    <span className="text-[#9F9F9F] mb-11">
                        12 JUL 10:10 PM
                    </span>
                    <p>240+ users have subscribed to Newsletter #1</p>
                    <span className="text-[#9F9F9F] mb-11">
                        18 JUL 19:10 PM
                    </span>
                    <p>Nick Mark Mentioned Sara Smith In New Post</p>
                    <span className="text-[#9F9F9F] mb-11">11 JUL 9:10 PM</span>
                </div>
            </div>
        </div>
    )
}

export default Activity
