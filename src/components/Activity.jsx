import React from 'react'
import arrow from '../assets/arrow.png'

const Activity = () => {
    return (
        <>
            <div className="flex flex-col text-white px-6 justify-center">
                <h2 className="p-2 text-2xl">Activity Overview</h2>
                <div className="flex gap-2">
                    <img src={arrow} alt={arrow} />
                    <p>16% this month</p>
                </div>
                <div className="flex items-start">
                    <div className="timeline">
                        <div className="timeline-container">
                            <p>Nick Mark Mentioned Sara Smith In New Post</p>
                            <span className="text-grey text-sm">
                                11 JUL 8:10 PM
                            </span>
                        </div>
                        <div className="timeline-container">
                            <p>The Post Name was removed by Nick Mark</p>
                            <span className="text-grey text-sm">
                                11 JUL 9:10 PM
                            </span>
                        </div>
                        <div className="timeline-container">
                            <p>Patrick Sulivan Published a New Post</p>
                            <span className="text-grey text-sm">
                                12 JUL 10:10 PM
                            </span>
                        </div>
                        <div className="timeline-container">
                            <p>240+ users have subscribed to Newsletter #1</p>
                            <span className="text-grey text-sm">
                                18 JUL 19:10 PM
                            </span>
                        </div>
                        <div className="timeline-container">
                            <p>Nick Mark Mentioned Sara Smith In New Post</p>
                            <span className="text-grey text-sm">
                                11 JUL 9:10 PM
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Activity
