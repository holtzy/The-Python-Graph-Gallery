import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Matplotlib, Seaborn } from "../components/MiscellaneousLogos"
import { Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk"
import ChartImage from "../components/ChartImage";
import Scrollspy from "react-scrollspy";
import TableOfContent from "../components/TableOfContent";
import FunctionExploration from '../components/FunctionExploration'

const chartDescription =
    "<p>This page displays all the charts available in this gallery.</p>";


export default function AllCharts() {

    return (
        <Layout title="Density chart">
            <TitleAndDescription
                title="All charts"
                description={chartDescription}
            />
            <Container>
                <Row>
                    <ChartImageContainer
                        imgName="70_Basic_density_plot_Seaborn"
                        caption="The most basic density plot one can make with python and seaborn"
                        linkTo="/70-basic-density-plot-with-seaborn"
                    />
                    <ChartImageContainer
                        imgName="71_Shaded_density_plot_Seaborn"
                        caption="learn how to build a very basic density chart"
                        linkTo=""
                    />
                    <ChartImageContainer
                        imgName="72_Horizontal_density_plot_Seaborn"
                        caption="learn how to build a very basic density chart"
                        linkTo=""
                    />
                    <ChartImageContainer
                        imgName="73_Control_bandwidth_densityplot_Seaborn1"
                        caption="learn how to build a very basic density chart"
                        linkTo=""
                    />
                    <ChartImageContainer
                        imgName="73_Control_bandwidth_densityplot_Seaborn2"
                        caption="learn how to build a very basic density chart"
                        linkTo=""
                    />
                    <ChartImageContainer
                        imgName="74_density_plot_multi_variables"
                        caption="learn how to build a very basic density chart"
                        linkTo=""
                    />
                </Row>
            </Container>

            <Container>
                <Contact />
            </Container>


        </Layout >
    );
}
