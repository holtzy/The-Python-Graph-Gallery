import React from 'react';
import TitleAndDescription from '../components/TitleAndDescription';
import Layout from '../components/Layout';
import Container from 'react-bootstrap/Container';
import Contact from '../components/Contact';
import Row from 'react-bootstrap/Row';
import ChartImageContainer from '../components/ChartImageContainer';
import Spacing from '../components/Spacing';
import { Link } from 'gatsby';
import volcanoGif from '../../static/graph/animated_volcano.gif';
import { Button } from 'react-bootstrap';
import ChartImage from '../components/ChartImage';
import { SEO } from '../components/SEO';

const chartDescription = (
  <>
    <p>
      👋 This page displays <b>all the charts</b> available in the{' '}
      <a href="https://python-graph-gallery.com">python graph gallery</a>.
    </p>
    <p>
      The vast majority of them are built using <code>matplotlib</code>,{' '}
      <code>seaborn</code> and <code>plotly</code>. But many other python
      charting libraries are used too.
    </p>
    <p>
      Click on an image to read the full tutorial with explanation and
      reproducible code 😍! If you are interested in a particular chart type,
      please check the{' '}
      <a href="https://python-graph-gallery.com">classification</a> in the front
      page.
    </p>
  </>
);

export const Head = () => (
  <SEO
    title="All Charts"
    seoDescription="A list of more than 300 charts made with Python, coming together with code and explanation"
  />
);

export default function AllCharts() {
  return (
    <Layout>
      <TitleAndDescription title="All charts" description={chartDescription} />
      <Container>
        <Row>
          <ChartImageContainer
            imgName="70_Basic_density_plot_Seaborn"
            caption="The most basic density plot one can make with python and seaborn"
            linkTo="/70-basic-density-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="71_Shaded_density_plot_Seaborn"
            caption="seaborn densty chart with filled area"
            linkTo="/71-density-plot-with-shade-seaborn"
          />
          <ChartImageContainer
            imgName="72_Horizontal_density_plot_Seaborn"
            caption="vertical seaborn density chart"
            linkTo="/72-horizontal-density-plot"
          />
          <ChartImageContainer
            imgName="73_Control_bandwidth_densityplot_Seaborn1"
            caption="control density chart color"
            linkTo="/73-control-bandwidth-of-seaborn-density-plot"
          />
          <ChartImageContainer
            imgName="73_Control_bandwidth_densityplot_Seaborn2"
            caption="Changed the bandwidth used to compute the density"
            linkTo="/73-control-bandwidth-of-seaborn-density-plot"
          />
          <ChartImageContainer
            imgName="74_density_plot_multi_variables"
            caption="Density chart with several displayed groups"
            linkTo="/74-density-plot-of-several-variables"
          />
          <ChartImageContainer
            imgName="density-mirror"
            caption="Mirror density chart to compare the distribution of 2 variables"
            linkTo="/density-mirror"
          />
          <ChartImageContainer
            imgName="80_bivariate_kernel_density_plot1"
            caption="Basic contourplot with seaborn."
            linkTo="/80-contour-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="80_bivariate_kernel_density_plot2"
            caption="Basic contourplot with seaborn."
            linkTo="/80-contour-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="80_bivariate_kernel_density_plot3"
            caption="Basic contourplot with seaborn."
            linkTo="/80-contour-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="83_2D_Histogram_matplotlib_3"
            caption="Basic 2D histogram with seaborn"
            linkTo="/83-basic-2d-histograms-with-matplotlib"
          />
          <ChartImageContainer
            imgName="83_2D_Histogram_matplotlib_5"
            caption="Control the color in the 2d histogram."
            linkTo="/83-basic-2d-histograms-with-matplotlib"
          />
          <ChartImageContainer
            imgName="83_2D_Histogram_matplotlib_6"
            caption="Black and white, color scale legend."
            linkTo="/83-basic-2d-histograms-with-matplotlib"
          />
        </Row>

        <Link to={'/342-animation-on-3d-plot'}>
          <img
            src={volcanoGif}
            alt="Animated volcano plot with Python"
            style={{ maxWidth: '900px', width: '100%' }}
          />
        </Link>

        <Row>
          <ChartImageContainer
            imgName="240_basic_area_chart"
            caption="The most basic area chart one can make with python and matplotlib"
            linkTo="/240-basic-area-chart"
          />
          <ChartImageContainer
            imgName="241_custom_area_chart1"
            caption="Control chart color (Matplotlib)"
            linkTo="/241-improve-area-chart"
          />
          <ChartImageContainer
            imgName="241_custom_area_chart2"
            caption="Control line color"
            linkTo="/241-improve-area-chart"
          />
          <ChartImageContainer
            imgName="242_area_chart_and_faceting"
            caption="Area chart with small multiple, seaborn"
            linkTo="/242-area-chart-and-faceting"
          />
          <ChartImageContainer
            imgName="2_horizontal_barplot"
            caption="Horizontal barplot, handy to make labels more readable."
            linkTo="/2-horizontal-barplot"
          />
          <ChartImageContainer
            imgName="3_control_color_barplot2"
            caption="Barplot and color customization."
            linkTo="/3-control-color-of-barplots"
          />
          <ChartImageContainer
            imgName="3_control_color_barplot4"
            caption="Change the bar stroke colors."
            linkTo="/3-control-color-of-barplots"
          />
          <ChartImageContainer
            imgName="4_add_title_and_axe_labels"
            caption="Title and axis labels with Matplotlib."
            linkTo="/4-add-title-and-axis-label"
          />
          <ChartImageContainer
            imgName="5_custom_space_between_bars"
            caption="Custom bar width. Can be handy to illustrate the sample size."
            linkTo="/5-control-width-and-space-in-barplots"
          />
          <ChartImageContainer
            imgName="5_custom_width_of_bars"
            caption="Custom space between bars."
            linkTo="/5-control-width-and-space-in-barplots"
          />
          <ChartImageContainer
            imgName="6_change_texture"
            caption="Change bar texture."
            linkTo="/3-control-color-of-barplots"
          />
          <ChartImageContainer
            imgName="7_increase_margin"
            caption="More space under X axis to fit long labels."
            linkTo="/7-custom-barplot-layout"
          />
          <ChartImageContainer
            imgName="7_custom_label"
            caption="Customize the bar labels."
            linkTo="/7-custom-barplot-layout"
          />
          <ChartImageContainer
            imgName="8_confidence_interval"
            caption="Barplot with confidence interval."
            linkTo="/8-add-confidence-interval-on-barplot"
          />
        </Row>

        <Spacing />
        <div style={{ margin: '0 auto' }}>
          <Link to="/315-a-world-map-of-surf-tweets">
            <ChartImage
              imgName={'315_Tweet_Surf_Bubble_map1'}
              caption={'Bubble map with Python and the basemap library'}
            />
          </Link>
        </div>

        <Spacing />
        <Row>
          <ChartImageContainer
            imgName="10_barplot_with_number_of_observations"
            caption="Highly customized barplot with colors, legend, labels and more."
            linkTo="/10-barplot-with-number-of-observation"
          />
          <ChartImageContainer
            imgName="basic-barplot-with-seaborn1"
            caption="Most basic barplot with Python and Seaborn"
            linkTo="/basic-barplot-with-seaborn"
          />
          <ChartImageContainer
            imgName="basic-barplot-with-seaborn2"
            caption="Make your barplot vertical by swapping the x and y parameters"
            linkTo="/basic-barplot-with-seaborn"
          />
          <ChartImageContainer
            imgName="basic-barplot-with-seaborn3"
            caption="Learn how to reorder groups in a seaborn barplot"
            linkTo="/basic-barplot-with-seaborn"
          />
          <ChartImageContainer
            imgName="error-bars-on-barplot"
            caption="Add error bars on a seaborn barplot"
            linkTo="/error-bars-on-barplot"
          />
          <ChartImageContainer
            imgName="12_stacked_barplot"
            caption="How to build a stacked barplot with Python."
            linkTo="/11-grouped-barplot"
          />
          <ChartImageContainer
            imgName="12_grouped_barplot"
            caption="How to build a grouped barplot with Python."
            linkTo="/12-stacked-barplot-with-matplotlib"
          />
          <ChartImageContainer
            imgName="12_stacked_barplot"
            caption="How to build a percent stacked barplot with Python.."
            linkTo="/13-percent-stacked-barplot"
          />
          <ChartImageContainer
            imgName="grouped-barplot1"
            caption="Grouped barplot with python and seaborn"
            linkTo="/grouped-barplot"
          />
          <ChartImageContainer
            imgName="stacked-barplot-seaborn"
            caption="Stacked barchart with python and seaborn"
            linkTo="/stacked-and-percent-stacked-barplot"
          />
          <ChartImageContainer
            imgName="stacked-percent-barplot-seaborn"
            caption="Percent stacked barchart with python and seaborn"
            linkTo="/stacked-and-percent-stacked-barplot"
          />
          <ChartImageContainer
            imgName="39_Bad_boxplot1"
            caption="Basic boxplot. You can quickly read the median, quartiles and outliers of each group."
            linkTo="/39-hidden-data-under-boxplot"
          />
          <ChartImageContainer
            imgName="39_Bad_boxplot2"
            caption="If you add individual points with jitter, a bimodal distribution appears for group B"
            linkTo="/39-hidden-data-under-boxplot"
          />
          <ChartImageContainer
            imgName="39_Bad_boxplot3"
            caption="If you have a very large dataset, the violin plot is a better alternative than jittering"
            linkTo="/39-hidden-data-under-boxplot"
          />
          <ChartImageContainer
            imgName="30_Basic_Box_seaborn2"
            caption="Let's start basic. The most simple boxplot, based on 3 differents input formats"
            linkTo="/30-basic-boxplot-with-seaborn"
          />
          <ChartImageContainer
            imgName="33_Custom_Boxplot_color_Seaborn5"
            caption="Everything you need concerning color customization on your boxplot: transparency, palette in use, manual control.."
            linkTo="/33-control-colors-of-boxplot-seaborn"
          />
        </Row>

        <Spacing />

        <div className="mx-auto">
          <iframe
            src="/interactiveCharts/313-bubble-map-with-folium.html"
            title="Basic map with folium"
            style={{ border: 'none', width: '800px', height: '300px' }}
          ></iframe>
        </div>
        <Link to="/313-bubble-map-with-folium">
          <Button size="sm">See code</Button>
        </Link>

        <Spacing />

        <Row>
          <ChartImageContainer
            imgName="33_Custom_Boxplot_color_Seaborn4"
            caption="Learn how to highlight a specific group in the dataset to make your point more obvious"
            linkTo="/33-control-colors-of-boxplot-seaborn"
          />
          <ChartImageContainer
            imgName="34_Grouped_Boxplot_Seaborn"
            caption="If you have group and subgroups, you can build a grouped boxplot"
            linkTo="/34-grouped-boxplot"
          />
          <ChartImageContainer
            imgName="35_Specific_order_Boxplot_Seaborn1"
            caption="Control the order of groups in the boxplot. It makes the chart more insightful"
            linkTo="/35-control-order-of-boxplot"
          />
          <ChartImageContainer
            imgName="36_Boxplot_with_Jitter_Seaborn"
            caption="To avoid hiding information, you can add individual data points with jitter"
            linkTo="/36-add-jitter-over-boxplot-seaborn"
          />
          <ChartImageContainer
            imgName="38_Number_of_obs_on_boxplot_seaborn"
            caption="Since individual data points are hidden, it is a good practice to show the sample size under each box"
            linkTo="/38-show-number-of-observation-on-boxplot"
          />
          <ChartImageContainer
            imgName="32_Custom_Boxplot_Appearance_Seaborn1-1"
            caption="Customization: border width"
            linkTo="/32-custom-boxplot-appearance-seaborn"
          />
          <ChartImageContainer
            imgName="32_Custom_Boxplot_Appearance_Seaborn2"
            caption="Customization: use notch"
            linkTo="/32-custom-boxplot-appearance-seaborn"
          />
          <ChartImageContainer
            imgName="32_Custom_Boxplot_Appearance_Seaborn3"
            caption="Customization: box width"
            linkTo="/32-custom-boxplot-appearance-seaborn"
          />
          <ChartImageContainer
            imgName="54_Grouped_violinplot_Seaborn"
            caption="If you have both groups and subgroups, you'll be interested in a grouped violin plot"
            linkTo="/54-grouped-violinplot"
          />
          <ChartImageContainer
            imgName="map-read-geojson-with-python-geopandas"
            caption="How to read a geoJson file with geopandas and transform it to a geodataframe."
            linkTo="/map-read-geojson-with-python-geopandas"
          />
          <ChartImageContainer
            imgName="312-add-markers-on-folium-map1"
            caption="How to read a geoJson file with geopandas and transform it to a geodataframe."
            linkTo="/312-add-markers-on-folium-map"
          />
          <ChartImageContainer
            imgName="312-add-markers-on-folium-map2"
            caption="How to read a geoJson file with geopandas and transform it to a geodataframe."
            linkTo="/312-add-markers-on-folium-map"
          />
          <ChartImageContainer
            imgName="270_Basic_Bubble_plot"
            caption="Most basic bubble plot with Python and Matplotlib"
            linkTo="/270-basic-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization1"
            caption="Bubble plot customization: color"
            linkTo="/271-custom-your-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization2"
            caption="Bubble plot customization: shape"
            linkTo="/271-custom-your-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization3"
            caption="Bubble plot customization: size"
            linkTo="/271-custom-your-bubble-plot"
          />
          <ChartImageContainer
            imgName="271_Bubble_plot_customization4"
            caption="Bubble plot customization: stroke"
            linkTo="/271-custom-your-bubble-plot"
          />
          <ChartImageContainer
            imgName="272_Bubble_plot_with_mapped_color"
            caption="A bubble chart width 4 dimensions: x, y, size & color"
            linkTo="/272-map-a-color-to-bubble-plot"
          />
          <ChartImageContainer
            imgName="bubble-plot-gapminder"
            caption="Bubble plot of the gapminder dataset"
            linkTo="/341-python-gapminder-animation"
          />
          <ChartImageContainer
            imgName="chord-diagram-chord-library"
            caption="Most basic chord diagram example from a random matrix."
            linkTo="/chord-diagram-python-chord"
          />
        </Row>

        <Spacing />

        <div style={{ maxWidth: '600px', margin: '0 auto', padding: 30 }}>
          <Link to="/231-chord-diagram-with-bokeh">
            <ChartImage
              imgName={'231_Chord_Bokeh'}
              caption={'Simple chord diagram with the Bokeh python library'}
            />
          </Link>
        </div>

        <Spacing />

        <Row>
          <ChartImageContainer
            imgName="132_Matplotlib-connected-scatterplot"
            caption="Basic connected scatterplot with Python and Seaborn."
            linkTo="/132-basic-connected-scatterplot"
          />
          <ChartImageContainer
            imgName="106_seaborn_style_on_plt1"
            caption="Basic connected scatterplot with Python and Matplotlib"
            linkTo="/106-seaborn-style-on-matplotlib-plot"
          />
          <ChartImageContainer
            imgName="194_matplotlib_subplot6"
            caption="Connected scatterplot on a split window"
            linkTo="/194-split-the-graphic-window-with-subplot"
          />
          <ChartImageContainer
            imgName="122_Multiple_line_plot"
            caption="How to customize line and markers with Matplotlib"
            linkTo="/122-multiple-lines-chart"
          />
          <ChartImageContainer
            imgName="connected-scatterplot-for-evolution"
            caption="Connected scatterplot to show the evolution of 2 variables"
            linkTo="/connected-scatterplot-for-evolution"
          />
          <ChartImageContainer
            imgName="circular-packing-1-level-hierarchy1"
            caption="Most basic circle packing"
            linkTo="/circular-packing-1-level-hierarchy"
          />
          <ChartImageContainer
            imgName="circular-packing-1-level-hierarchy2"
            caption="Add colors and labels"
            linkTo="/circular-packing-1-level-hierarchy"
          />
          <ChartImageContainer
            imgName="circular-packing-1-level-hierarchy3"
            caption="control space between bubbles"
            linkTo="/circular-packing-1-level-hierarchy"
          />
        </Row>

        <Spacing />

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: 30 }}>
          <Link to="/circular-packing-several-levels-of-hierarchy">
            <ChartImage
              imgName={'circular-packing-several-levels-of-hierarchy-large'}
              caption={
                'Circular packing with several levels of hierarchy with Python and the circlize library'
              }
            />
          </Link>
        </div>

        <Spacing />

        <Row>
          <ChartImageContainer
            imgName="111_Correlogram_custom1"
            caption="Correlogram with linear trend displayed on each scatterplot"
            linkTo="/111-custom-correlogram"
          />
          <ChartImageContainer
            imgName="111_Correlogram_custom4"
            caption="Apply colors to each group and customized the scatterplot"
            linkTo="/111-custom-correlogram"
          />
          <ChartImageContainer
            imgName="111_Correlogram_custom7"
            caption="Customize the distributions displayed on the diagonal"
            linkTo="/111-custom-correlogram"
          />
        </Row>

        <Spacing />

        <Row>
          <ChartImageContainer
            imgName="401_custom_Dendrogram2"
            caption="Most basic dendrogram and clustering with Python and Matplotlib"
            linkTo="/400-basic-dendrogram"
          />
          <ChartImageContainer
            imgName="401_custom_Dendrogram6"
            caption="Horizontal dendrogram"
            linkTo="/401-customised-dendrogram"
          />
          <ChartImageContainer
            imgName="401_custom_Dendrogram5"
            caption="Cut the dendrogram at a specific height"
            linkTo="/401-customised-dendrogram"
          />
        </Row>

        <Spacing />

        <Row>
          <ChartImageContainer
            imgName="404_Dendro_and_heatmap3"
            caption="Most basic heatmap with dendrogram with seaborn"
            linkTo="/404-dendrogram-with-heat-map"
          />
          <ChartImageContainer
            imgName="404_Dendro_and_heatmap9"
            caption="Change color palette"
            linkTo="/404-dendrogram-with-heat-map"
          />
          <ChartImageContainer
            imgName="404_Dendro_and_heatmap11"
            caption="Learn how to normalize data in the heatmap, avoiding that kind of result"
            linkTo="/404-dendrogram-with-heat-map"
          />
          <ChartImageContainer
            imgName="70_Basic_density_plot_Seaborn"
            caption="The most basic density plot one can make with python and seaborn"
            linkTo="/70-basic-density-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="71_Shaded_density_plot_Seaborn"
            caption="seaborn densty chart with filled area"
            linkTo="/71-density-plot-with-shade-seaborn"
          />
          <ChartImageContainer
            imgName="72_Horizontal_density_plot_Seaborn"
            caption="vertical seaborn density chart"
            linkTo="/72-horizontal-density-plot"
          />
          <ChartImageContainer
            imgName="73_Control_bandwidth_densityplot_Seaborn1"
            caption="control density chart color"
            linkTo="/73-control-bandwidth-of-seaborn-density-plot"
          />
          <ChartImageContainer
            imgName="73_Control_bandwidth_densityplot_Seaborn2"
            caption="Changed the bandwidth used to compute the density"
            linkTo="/73-control-bandwidth-of-seaborn-density-plot"
          />
          <ChartImageContainer
            imgName="74_density_plot_multi_variables"
            caption="Density chart with several displayed groups"
            linkTo="/74-density-plot-of-several-variables"
          />
          <ChartImageContainer
            imgName="density-mirror"
            caption="Mirror density chart to compare the distribution of 2 variables"
            linkTo="/density-mirror"
          />
          <ChartImageContainer
            imgName="density-chart-multiple-groups-seaborn1"
            caption="Density chart with multiple groups overlapped"
            linkTo="/density-chart-multiple-groups-seaborn"
          />
          <ChartImageContainer
            imgName="density-chart-multiple-groups-seaborn3"
            caption="Density chart with multiple groups overlapped"
            linkTo="/density-chart-multiple-groups-seaborn"
          />
          <ChartImageContainer
            imgName="density-chart-multiple-groups-seaborn4"
            caption="Density chart with multiple groups overlapped"
            linkTo="/density-chart-multiple-groups-seaborn"
          />
          <ChartImageContainer
            imgName="density-chart-matplotlib-vector"
            caption="Basic density chart with python and matplotlib from a vector of data"
            linkTo="/density-chart-matplotlib"
          />
          <ChartImageContainer
            imgName="density-chart-matplotlib-csv"
            caption="Read a csv file and plot the density of a column"
            linkTo="/density-chart-matplotlib"
          />
          <ChartImageContainer
            imgName="161_custom_donut_plot5"
            caption="Add and customize the labels"
            linkTo="/161-custom-matplotlib-donut-plot"
          />
          <ChartImageContainer
            imgName="161_custom_donut_plot3"
            caption="Customize the donut section colors"
            linkTo="/161-custom-matplotlib-donut-plot"
          />
          <ChartImageContainer
            imgName="161_custom_donut_plot6"
            caption="Add blank space between each donut section."
            linkTo="/161-custom-matplotlib-donut-plot"
          />
          <ChartImageContainer
            imgName="162_Background_color_donut"
            caption="How to make the rectangle colors relative to their values."
            linkTo="/162-change-background-of-donut-plot"
          />
          <ChartImageContainer
            imgName="90_Input_format_for_heatmap1"
            caption="The heatmap() function and how to apply it to any kind of data input"
            linkTo="/90-heatmaps-with-various-input-format"
          />
          <ChartImageContainer
            imgName="90_Input_format_for_heatmap2bis"
            caption="Plotting only one half of the heatmap"
            linkTo="/90-heatmaps-with-various-input-format"
          />
          <ChartImageContainer
            imgName="91_Custom_heat_control_lines"
            caption="Seaborn heatmap customization: grid"
            linkTo="/91-customize-seaborn-heatmap"
          />
          <ChartImageContainer
            imgName="91_Custom_heat_annotate_cells"
            caption="Seaborn heatmap customization: show numbers in cell"
            linkTo="/91-customize-seaborn-heatmap"
          />
          <ChartImageContainer
            imgName="91_Custom_heat_hide_colorbar"
            caption="Seaborn heatmap customization: hide the color bar"
            linkTo="/91-customize-seaborn-heatmap"
          />
          <ChartImageContainer
            imgName="92_Control_color_heatmap1"
            caption="Color customization: how to select other color palettes and more"
            linkTo="/92-control-color-in-seaborn-heatmaps"
          />
          <ChartImageContainer
            imgName="94_Heatmap_Normalization_Seaborn1"
            caption="A heatmap that probably needs to be normalized."
            linkTo="/94-use-normalization-on-seaborn-heatmap"
          />
          <ChartImageContainer
            imgName="94_Heatmap_Normalization_Seaborn2"
            caption="The exact same heatmap after normalization"
            linkTo="/94-use-normalization-on-seaborn-heatmap"
          />
          <ChartImageContainer
            imgName="404_Dendro_and_heatmap3"
            caption="Most basic heatmap with dendrogram with seaborn"
            linkTo="/404-dendrogram-with-heat-map"
          />
          <ChartImageContainer
            imgName="404_Dendro_and_heatmap9"
            caption="Change color palette"
            linkTo="/404-dendrogram-with-heat-map"
          />
          <ChartImageContainer
            imgName="404_Dendro_and_heatmap11"
            caption="Learn how to normalize data in the heatmap, avoiding that kind of result"
            linkTo="/404-dendrogram-with-heat-map"
          />
        </Row>

        <Spacing />

        <div style={{ maxWidth: '600px', margin: '0 auto', padding: 30 }}>
          <Link to="/405-dendrogram-with-heatmap-and-coloured-leaves">
            <ChartImage
              imgName={'405_Dendro_and_heatmap_and_rowcolor'}
              caption={
                'A seaborn heatmap with clusterization and dendrogram applied'
              }
            />
          </Link>
        </div>

        <Spacing />

        <Row>
          <ChartImageContainer
            imgName="20_Basic_Histogram_seaborn1"
            caption="The most basic histogram with seaborn. It adds a density on top by default"
            linkTo="/20-basic-histogram-seaborn"
          />
          <ChartImageContainer
            imgName="20_Basic_Histogram_seaborn2"
            caption="Play with the bin parameter to control the number of bars"
            linkTo="/20-basic-histogram-seaborn"
          />
          <ChartImageContainer
            imgName="21_Display_Rug_and_distribution_on_hist1"
            caption="Remove the density chart on top of the seaborn histogram"
            linkTo="/21-control-rug-and-density-on-seaborn-histogram"
          />
          <ChartImageContainer
            imgName="21_Display_Rug_and_distribution_on_hist2"
            caption="Add rug on top of the histogram"
            linkTo="/21-control-rug-and-density-on-seaborn-histogram"
          />
          <ChartImageContainer
            imgName="21_Display_Rug_and_distribution_on_hist3"
            caption="Customize the rug: color, size and more"
            linkTo="/21-control-rug-and-density-on-seaborn-histogram"
          />
          <ChartImageContainer
            imgName="21_Display_Rug_and_distribution_on_hist4"
            caption="Customize the appearance of the density chart displayed on top of the histogram"
            linkTo="/21-control-rug-and-density-on-seaborn-histogram"
          />
          <ChartImageContainer
            imgName="24_Histogram_with_boxplot_on_top"
            caption="How to split the chart window to display a boxplot on top of the histogram"
            linkTo="/24-histogram-with-a-boxplot-on-top-seaborn"
          />
          <ChartImageContainer
            imgName="25_Histogram_of_several_variables1"
            caption="Compare the distribution of several groups on the same chart"
            linkTo="/25-histogram-with-several-variables-seaborn"
          />
          <ChartImageContainer
            imgName="25_Histogram_of_several_variables2"
            caption="Use small multiple to compare the distribution of several groups"
            linkTo="/25-histogram-with-several-variables-seaborn"
          />
          <ChartImageContainer
            imgName="82_seaborn_jointplot1"
            caption="Histogram can be added around a scatterplot to show each variable distributions"
            linkTo="/82-marginal-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="82_seaborn_jointplot6"
            caption="Histogram can be added around a 2d density chart to show x and y variable distributions"
            linkTo="/82-marginal-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="density-mirror-histogram"
            caption="Mirror density chart to compare the distribution of 2 variables"
            linkTo="/density-mirror"
          />
          <ChartImageContainer
            imgName="120_Basic_lineplot1"
            caption="How to build a basic line chart with python from any kind of input format"
            linkTo="/120-line-chart-with-matplotlib"
          />
          <ChartImageContainer
            imgName="121_Custom_line_plot3"
            caption="How to customize the matplotlib line plot appearance: width, stroke, color, style.."
            linkTo="/121-line-chart-customization"
          />
          <ChartImageContainer
            imgName="122_Multiple_line_plot"
            caption="Line chart with multiple groups"
            linkTo="/122-multiple-lines-chart"
          />
          <ChartImageContainer
            imgName="123_Highlight_a_line"
            caption="How to customize the matplotlib line plot appearance: width, stroke, color, style.."
            linkTo="/123-highlight-a-line-in-line-plot"
          />
          <ChartImageContainer
            imgName="124_Spaghetti_plot"
            caption="Line chart with multiple groups"
            linkTo="/124-spaghetti-plot"
          />
          <ChartImageContainer
            imgName="125_Lineplot_small_multiple_v2"
            caption="Line chart and small multiple"
            linkTo="/125-small-multiples-for-line-chart"
          />
          <ChartImageContainer
            imgName="125_Lineplot_small_multiple"
            caption="Line chart and small multiple (variation)"
            linkTo="/125-small-multiples-for-line-chart"
          />
          <ChartImageContainer
            imgName="180_Basic_lolipop_plot"
            caption="Most basic lollipop. Will get you started with any kind of input format"
            linkTo="/180-basic-lollipop-plot"
          />
          <ChartImageContainer
            imgName="181_custom_lolliplot_2"
            caption="Basic circle customizations: shape, size, color and more."
            linkTo="/181-custom-lollipop-plot"
          />
          <ChartImageContainer
            imgName="181_custom_lolliplot_3"
            caption="Change lollipop baseline position."
            linkTo="/181-custom-lollipop-plot"
          />
          <ChartImageContainer
            imgName="182_vertical_lolipop_plot"
            caption="Horizontal lollipop chart (more readable labels)."
            linkTo="/182-vertical-lollipop-plot"
          />
          <ChartImageContainer
            imgName="183_highlight_a_group_in_lolipop_plot"
            caption="Highlight some specific groups in a lollipop."
            linkTo="/183-highlight-a-group-in-lollipop"
          />
          <ChartImageContainer
            imgName="184_lolipop_plot_with_2_groups"
            caption="Cleveland chart: a lollipop chart with 2 subgroups displayed under each row."
            linkTo="/184-lollipop-plot-with-2-groups"
          />
          <ChartImageContainer
            imgName="185_lolipop_plot_with_conditional_color"
            caption="Lollipop chart with conditional colors."
            linkTo="/185-lollipop-plot-with-conditional-color"
          />
          <ChartImageContainer
            imgName="50_Basic_Violin_seaborn1"
            caption="How to build a very basic violin. Shows example based on different input formats."
            linkTo="/50-basic-violinplot-and-input-formats"
          />
          <ChartImageContainer
            imgName="51_Horizontal_violinplot_Seaborn"
            caption="Make your violin chart horizontal to make labels more readable"
            linkTo="/51-horizontal-violinplot"
          />
          <ChartImageContainer
            imgName="52_Custom_violinplot_Appearance_Seaborn1"
            caption="Chart appearance: control violin width, stroke width and more"
            linkTo="/52-custom-seaborn-violinplot"
          />
          <ChartImageContainer
            imgName="53_Custom_violinplot_color_Seaborn3"
            caption="How to manage colors on a python violin plot"
            linkTo="/53-control-color-of-seaborn-violinplot"
          />
          <ChartImageContainer
            imgName="55_Specific_order_violinplot_Seaborn2"
            caption="Control the groups order, very useful if you want to display them by increasing mean"
            linkTo="/55-control-order-of-groups-in-violinplot-seaborn"
          />
        </Row>

        <Spacing />

        <div style={{ margin: '0 auto', padding: 0 }}>
          <Link to="/hexbin-map-from-geojson-python">
            <ChartImage
              imgName={'hexbin-map-from-geojson-python-orig'}
              caption={'Clean hexbin map with python, geopandas and matplotlib'}
            />
          </Link>
        </div>

        <Spacing />

        <Row>
          <ChartImageContainer
            imgName="54_Grouped_violinplot_Seaborn"
            caption="If you have both groups and subgroups, you'll be interested in a grouped violin plot"
            linkTo="/54-grouped-violinplot"
          />
          <ChartImageContainer
            imgName="58_Number_of_obs_on_violinplot_seaborn"
            caption="Show the number of observations per group"
            linkTo="/58-show-number-of-observation-on-violinplot"
          />
          <ChartImageContainer
            imgName="54_Grouped_violinplot_Seaborn"
            caption="If you have both groups and subgroups, you'll be interested in a grouped violin plot"
            linkTo="/54-grouped-violinplot"
          />
          <ChartImageContainer
            imgName="261_Custom_Wordcloud1"
            caption="Wordcloud customization: word size."
            linkTo="/261-custom-python-wordcloud"
          />
          <ChartImageContainer
            imgName="261_Custom_Wordcloud4"
            caption="Wordcloud customization: background color."
            linkTo="/261-custom-python-wordcloud"
          />
          <ChartImageContainer
            imgName="261_Custom_Wordcloud5"
            caption="Wordcloud customization: word color."
            linkTo="/261-custom-python-wordcloud"
          />
          <ChartImageContainer
            imgName="171_Basic_Venn_3-groups"
            caption="Venn Diagram with 3 sets."
            linkTo="/171-basic-venn-diagram-with-3-groups"
          />
          <ChartImageContainer
            imgName="172_custom_venn_diagram3"
            caption="Customize Venn Diagram: circles, lables and more."
            linkTo="/172-custom-venn-diagram"
          />
          <ChartImageContainer
            imgName="174_Change_Background_color_venn"
            caption="Change Venn diagram background color."
            linkTo="/174-change-background-colour-of-venn-diagram"
          />
          <ChartImageContainer
            imgName="201_Custom_Treemap1"
            caption="How to control the color of your treemap"
            linkTo="/201-control-the-color-of-treemap"
          />
          <ChartImageContainer
            imgName="202_Treemap_map_color_to_size"
            caption="How to make the rectangle colors relative to their values."
            linkTo="/202-treemap-with-colors-mapped-on-values"
          />
          <ChartImageContainer
            imgName="250_basic_stacked_area_chart"
            caption="Most basic stacked area chart"
            linkTo="/250-basic-stacked-area-chart"
          />
        </Row>

        <Spacing />

        <div style={{ maxWidth: '600px', margin: '0 auto', padding: 30 }}>
          <Link to="/252-baseline-options-for-stacked-area-chart">
            <ChartImage
              imgName={'252_baseline_and_stacked_area_chart'}
              caption={'It is hard to see how the green group evolves.'}
            />
          </Link>
        </div>

        <Spacing />

        <Row>
          <ChartImageContainer
            imgName="250_basic_stacked_area_chart"
            caption="Most basic stacked area chart"
            linkTo="/250-basic-stacked-area-chart"
          />
          <ChartImageContainer
            imgName="251_seaborn_style_on_stacked_area_chart"
            caption="Apply seaborn style on the matplotlib stacked area chart"
            linkTo="/251-stacked-area-chart-with-seaborn-style"
          />
          <ChartImageContainer
            imgName="253_color_and_stacked_area_chart2"
            caption="Control area colors"
            linkTo="/253-control-the-color-in-stacked-area-chart"
          />
          <ChartImageContainer
            imgName="242_area_chart_and_faceting"
            caption="Area chart and small multiple"
            linkTo="/242-area-chart-and-faceting"
          />
          <ChartImageContainer
            imgName="134_Fighting_overplotting1"
            caption="Basic boxplot. You can quickly read the median, quartiles and outliers of each group."
            linkTo="/134-how-to-avoid-overplotting-with-python"
          />
          <ChartImageContainer
            imgName="134_Fighting_overplotting2"
            caption="If you add individual points with jitter, a bimodal distribution appears for group B"
            linkTo="/134-how-to-avoid-overplotting-with-python"
          />
          <ChartImageContainer
            imgName="134_Fighting_overplotting10"
            caption="If you have a very large dataset, the violin plot is a better alternative than jittering"
            linkTo="/134-how-to-avoid-overplotting-with-python"
          />
        </Row>

        <Spacing />

        <div className="mx-auto">
          <iframe
            src="/interactiveCharts/parallel-coordinate-plot-plotly.html"
            title="parallel coordinate chart with plotly"
            style={{ border: 'none', width: '800px', height: '500px' }}
          ></iframe>
        </div>
        <Link to="/parallel-coordinate-plot-plotly">
          <Button size="sm">See code</Button>
        </Link>

        <Spacing />

        <Row>
          <ChartImageContainer
            imgName="40_Basic_Scatterplot_seaborn"
            caption="Most basic scatterplot with seaborn"
            linkTo="/40-basic-scatterplot-seaborn"
          />
          <ChartImageContainer
            imgName="42_Scatterplot_custom_linear_fit_seaborn"
            caption="Add a regression thanks to the fit_reg parameter"
            linkTo="/42-custom-linear-regression-fit-seaborn"
          />
          <ChartImageContainer
            imgName="41_Scatterplot_change_marker_shape_seaborn"
            caption="Customize markers: color, size, opacity, type and more"
            linkTo="/41-control-marker-features"
          />
          <ChartImageContainer
            imgName="43_seaborn_map_color_to_a_avariable3"
            caption="Color dots according to a group"
            linkTo="/43-use-categorical-variable-to-color-scatterplot-seaborn"
          />
          <ChartImageContainer
            imgName="44_seaborn_control_axis_limits"
            caption="Control X and Y axes limits"
            linkTo="/44-control-axis-limits-of-plot-seaborn"
          />
          <ChartImageContainer
            imgName="45_set_color_of_each_point_in_scatterplot_seaborn"
            caption="Control the marker's color according to their coordinates"
            linkTo="/45-control-color-of-each-marker-seaborn"
          />
          <ChartImageContainer
            imgName="46_add_text_annotation_scatterplot_seaborn3"
            caption="Add labels manually on your scatterplot"
            linkTo="/46-add-text-annotation-on-scatterplot"
          />
          <ChartImageContainer
            imgName="82_seaborn_jointplot4"
            caption="Scatterplot with marginal distributions"
            linkTo="/82-marginal-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="193_annotate6"
            caption="Display a math equation on your matplotlib chart"
            linkTo="/193-annotate-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="193_annotate5"
            caption="Matplotlib: add horizontal and vertical ablines"
            linkTo="/193-annotate-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="193_annotate2"
            caption="Highlight a specific area of the chart with Matplotlib"
            linkTo="/193-annotate-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="193_annotate1"
            caption="Add an annotation to highlight a specific marker"
            linkTo="/193-annotate-matplotlib-chart"
          />
          <ChartImageContainer
            imgName="ridgeline-graph-seaborn"
            caption="Ridgeline chart with python, matplotlib and seaborn."
            linkTo="/ridgeline-graph-seaborn"
          />
        </Row>

        <Spacing />

        <div className="mx-auto">
          <iframe
            src="/interactiveCharts/ridgeline-graph-plotly.html"
            title="ridgeline chart with plotly"
            style={{ border: 'none', width: '800px', height: '500px' }}
          ></iframe>
        </div>
        <Link to="/ridgeline-graph-plotly">
          <Button size="sm">See code</Button>
        </Link>

        <Spacing />

        <Row>
          <ChartImageContainer
            imgName="390_basic_Radarchart"
            caption="Most basic radar chart with python."
            linkTo="/390-basic-radar-chart"
          />
          <ChartImageContainer
            imgName="391_Several_indiv_Radarchart"
            caption="Radar chart with several displayed values"
            linkTo="/391-radar-chart-with-several-individuals"
          />
          <ChartImageContainer
            imgName="111_Correlogram_custom4"
            caption="Build a correlogram with the pairplot function"
            linkTo="/111-custom-correlogram"
          />
          <ChartImageContainer
            imgName="130_Basic_Matplotlib_Scatterplot"
            caption="Most basic scatterplot with Matplotlib"
            linkTo="/130-basic-matplotlib-scatterplot"
          />
          <ChartImageContainer
            imgName="131_Custom_Matplotlib_Scatterplot5"
            caption="Customize marker features: size, color, stroke, type and more"
            linkTo="/131-custom-a-matplotlib-scatterplot"
          />
          <ChartImageContainer
            imgName="pie-plot-matplotlib-basic-add-labels"
            caption="Add and customize the labels"
            linkTo="/pie-plot-matplotlib-basic"
          />
          <ChartImageContainer
            imgName="pie-plot-matplotlib-basic-add-padding"
            caption="Customize the pie section colors"
            linkTo="/pie-plot-matplotlib-basic"
          />
          <ChartImageContainer
            imgName="pie-plot-matplotlib-basic-colors"
            caption="Add blank space between each pie section."
            linkTo="/pie-plot-matplotlib-basic"
          />
          <ChartImageContainer
            imgName="150_Parrallele_plot_with_pandas"
            caption="Basic parallel coordinate char"
            linkTo="/150-parallel-plot-with-pandas"
          />
        </Row>

        <Spacing />

        <Link to={'/392-use-faceting-for-radar-chart'}>
          <ChartImage
            imgName="393_Faceting_and_Radarchart"
            caption="A polar chart with small multiple to compare 4 groups"
          />
        </Link>

        <Spacing />

        <Row>
          <ChartImageContainer
            imgName="320_Network_start_simple"
            caption="Most basic network chart with Python and NetworkX"
            linkTo="/320-basic-network-from-pandas-data-frame"
          />
          <ChartImageContainer
            imgName="321_Network_custom_look4"
            caption="Custom network appearance: color, shape, size, links"
            linkTo="/321-custom-networkx-graph-appearance"
          />
          <ChartImageContainer
            imgName="322_Network_layout4"
            caption="Control the layout used for the node location"
            linkTo="/322-network-layout-possibilities"
          />
          <ChartImageContainer
            imgName="323_Network_direction1"
            caption="Manage directed and undirected networks by adding arrows"
            linkTo="/323-directed-or-undirected-network"
          />
          <ChartImageContainer
            imgName="326_Network_background_color"
            caption="Control the background color of a network chart"
            linkTo="/326-background-colour-of-network-chart"
          />
          <ChartImageContainer
            imgName="324_Network_mapcolor1"
            caption="Map a continuous or categoric variable to nodes"
            linkTo="/324-map-a-color-to-network-nodes"
          />
          <ChartImageContainer
            imgName="325_Network_mapcolorttoedge1"
            caption="Map a color to edges"
            linkTo="/325-map-colour-to-the-edges-of-a-network"
          />
          <ChartImageContainer
            imgName="hexbin-map-from-geojson-python-1"
            caption="Most basic hexbin map from geoJson with python."
            linkTo="/hexbin-map-from-geojson-python"
          />
          <ChartImageContainer
            imgName="hexbin-map-from-geojson-python-2"
            caption="Compute polygon centroid to add labels."
            linkTo="/hexbin-map-from-geojson-python"
          />
          <ChartImageContainer
            imgName="300-draw-a-connection-line1"
            caption="Most basic connection map with Python and Basemap."
            linkTo="/300-draw-a-connection-line"
          />
          <ChartImageContainer
            imgName="300-draw-a-connection-line2"
            caption="Show connection between a few cities with great circles."
            linkTo="/300-draw-a-connection-line"
          />
        </Row>

        <Spacing />

        <div style={{ margin: '0 auto' }}>
          <Link to="/300-draw-a-connection-line">
            <ChartImage
              imgName={'300-draw-a-connection-line3'}
              caption={
                'A connection map between 7 cities made with Python and Basemap'
              }
            />
          </Link>
        </div>

        <Spacing />

        <Row>
          <ChartImageContainer
            imgName="circular-barplot-basic1"
            caption="Explanation of the polar coordinates with Matplotlib."
            linkTo="/circular-barplot-basic"
          />
          <ChartImageContainer
            imgName="circular-barplot-basic2"
            caption="Most basic circular barplot with Python and Matplotlib."
            linkTo="/circular-barplot-basic"
          />
          <ChartImageContainer
            imgName="circular-barplot-basic4"
            caption="Reorder items."
            linkTo="/circular-barplot-basic"
          />
        </Row>

        <div style={{ margin: '0 auto', padding: 0 }}>
          <Link to="/choropleth-map-geopandas-python">
            <ChartImage
              imgName={'choropleth-map-geopandas-python'}
              caption={
                'Choropleth map of US counties with Python, Geopandas and Geoplot'
              }
            />
          </Link>
        </div>
      </Container>

      <Spacing />

      <Container>
        <Contact />
      </Container>

      <Spacing />
    </Layout>
  );
}
