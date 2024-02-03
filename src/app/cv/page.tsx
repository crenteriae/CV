import Header from "../header"
import LeftPane from "../left"
import RightPane from "../right"

export default function Curriculum(){
    return(
        <div className="m-3">
            <Header />
            <div className='flex flex-row'>
                <div className='flex w-8/12 flex-col'>
                    <LeftPane />
                </div>
                <div className='flex w-4/12 flex-col'>
                    <RightPane />
                </div>
            </div>
        </div>
    )
}