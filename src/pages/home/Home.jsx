import Chart from "../../components/chart/Chart"
import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import "./home.css"
import {userData} from "../../dummyData"


export default function Home() {
    return(
        <div className="home">
            <Featuredinfo />
            <Chart data={userData} title="analytics" grid dataKey=""/>
        </div>
    )
}