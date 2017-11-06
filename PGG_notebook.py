     	# ------------------------------------------------ #
        #     THE PYTHON_GRAPH_GALLERY
        #               Hundreds of charts made with python
        #               www.python-graph-gallery.com
        #
        #                   by Yan Holtz
        # ------------------------------------------------ #
 
  
# Welcome to the Python Graph gallery 
# All the graphics displayed online are initialy created here.
# Charts are organized per section.
# Feel free to use this file, but honestly, it is more convenient to visit the website I believe...
#
#   www.python-graph-gallery.com
#
  




  
  
  -----------------------------------------
 |											|
 |											|
 |  SERIE #1 -> #20 BARPLOT MATPLOTLIB
 |											|
 |											|
  -----------------------------------------




# ————————————————————————————————————————————————————
#  #1 Basic barplot
 
import numpy as np
import matplotlib.pyplot as plt

# Choose the dot per inch
my_dpi=96

# Choose the dimensions for the figure (here 480x480)
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Choose the height of the bars
height = [3, 12, 5, 18, 45]

# Choose the names of the bars
bars = ('A', 'B', 'C', 'D', 'E')

y_pos = np.arange(len(bars))

# Create bars
plt.bar(y_pos, height)

# Create names on the x-axis
plt.xticks(y_pos, bars)

# Save the figure and choose a name
plt.savefig('#1_basic_barplot.png')

# Show graphic
plt.show()
 
 
 
 
 
 
# ————————————————————————————————————————————————————
#  #2 Horizontal barplot
 
import numpy as np
import matplotlib.pyplot as plt

# Choose the dot per inch
my_dpi=96

# Choose the dimensions for the figure (here 480x480)
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Choose the height of the bars
height = [3, 12, 5, 18, 45]

# Choose the names of the bars
bars = ('A', 'B', 'C', 'D', 'E')

y_pos = np.arange(len(bars))

# Create horizontal bars
plt.barh(y_pos, height)

# Create names on the y-axis
plt.yticks(y_pos, bars)

# Save the figure and choose a name
plt.savefig('#2_horizontal_barplot.png')

# Show graphic
plt.show()
 
 
 
 
 
#————————————————————————————————————————————————————
# #3 Control color of barplot
 
import numpy as np
import matplotlib.pyplot as plt

# Choose the dot per inch
my_dpi=96

# Choose the dimensions for the figure (here 480x480)
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Choose the height of the bars
height = [3, 12, 5, 18, 45]

# Choose the names of the bars
bars = ('A', 'B', 'C', 'D', 'E')

y_pos = np.arange(len(bars))


# Choose color using RGB:
plt.bar(y_pos, height, color=(0.2, 0.4, 0.6, 0.6))
plt.xticks(y_pos, bars)

# Save the figure and choose a name
plt.savefig('#3_control_color_barplot1.png')

plt.show()


my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Choose the color for each bar
plt.bar(y_pos, height, color=['black', 'red', 'green', 'blue', 'cyan'])
plt.xticks(y_pos, bars)

# Save the figure and choose a name
plt.savefig('#3_control_color_barplot2.png')

plt.show()


my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Change edge color
plt.bar(y_pos, height, color=(0.1, 0.1, 0.1, 0.1), edgecolor='blue')
plt.xticks(y_pos, bars)

# Save the figure and choose a name
plt.savefig('#3_control_color_barplot3.png')

plt.show()

my_dpi = 96
plt.figure(figsize=(480 / my_dpi, 480 / my_dpi), dpi=my_dpi)

# Change width of edgecolor
plt.bar(y_pos, height, color=(0.1, 0.1, 0.1, 0.1), edgecolor='blue', linewidth = '3')
plt.xticks(y_pos, bars)

# Save the figure and choose a name
plt.savefig('#3_control_color_barplot4.png')
plt.show()


 
 
 
 
# ———————————————————————————————————
#  #4 Add title and axe labels
 
import numpy as np
import matplotlib.pyplot as plt

# Choose the dot per inch
my_dpi=96

# Choose the dimensions for the figure (here 480x480)
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Choose the height of the bars
height = [3, 12, 5, 18, 45]

# Choose the names of the bars
bars = ('A', 'B', 'C', 'D', 'E')


y_pos = np.arange(len(bars))

# Create bars and choose
plt.bar(y_pos, height, color = (0.5,0.1,0.5,0.6))

plt.title('My title')
plt.xlabel('categories')
plt.ylabel('values')

plt.ylim(0,60)

# Create names
plt.xticks(y_pos, bars)

plt.savefig('#4_add_title_and_axe_labels.png')

# Show graphic
plt.show()







# ———————————————————————————————————
#  #5 Custom the space between bars, and their width


import matplotlib.pyplot as plt

# Choose the dot per inch
my_dpi=96

# Choose the dimensions for the figure (here 480x480)
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Choose the height of the bars
height = [3, 12, 5, 18, 45]

# Choose the names of the bars
bars = ('A', 'B', 'C', 'D', 'E')

# Choose the position of each barplots on the x-axis (space=1,4,3,1)
y_pos = [0,1,5,8,9]

# Create bars
plt.bar(y_pos, height)

# Create names on the x-axis
plt.xticks(y_pos, bars)

# Save the figure and choose a name
plt.savefig('#5_custom_space_between_bars.png')

# Show graphic
plt.show()

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Choose the width of each bar
width = [0.1,0.2,3,1.5,0.3]
y_pos = [0,0.3,2,4.5,5.5]
plt.bar(y_pos, height, width=width)
plt.xticks(y_pos, bars)
plt.savefig('#5_custom_width_of_bars.png')
plt.show()







# ———————————————————————————————————
#  #6 Change texture of barplots

import numpy as np
import matplotlib.pyplot as plt

# Choose the dot per inch
my_dpi = 96

# Choose the dimensions for the figure (here 480x480)
plt.figure(figsize=(480 / my_dpi, 480 / my_dpi), dpi=my_dpi)

# Choose the height of the bars
height = [2, 5, 4, 6]

# Choose the names of the bars
bars = ('A', 'B', 'C', 'D')

# Choose the angle and density of hatch
patterns = ['-', '///', '|||', '//////']

y_pos = np.arange(len(patterns))

# Create bars
for i in range(len(patterns)):
    plt.bar(i, height[i], hatch=patterns[i], color='pink', edgecolor='black')

# Create names on the x-axis
plt.xticks(y_pos, bars)

# Save the figure and choose a name
plt.savefig('#6_change_texture.png')

# Show graphic
plt.show()







# ———————————————————————————————————
#  #7 Custom Barplot Layout


import numpy as np
import matplotlib.pyplot as plt

# Choose the dot per inch
my_dpi=96

# Choose the dimensions for the figure (here 480x480)
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Choose the height of the bars
height = [3, 12, 5, 18, 45]

# Choose the names of the bars
bars = ('group1', 'group2', 'group3', 'group4', 'group5')

y_pos = np.arange(len(bars))

# Create bars
plt.bar(y_pos, height)

# Create names on the x-axis
plt.xticks(y_pos, bars, color='orange')
plt.yticks(color='orange')

# Save the figure and choose a name
plt.savefig('#7_custom_label.png')

# Show graphic
plt.show()

my_dpi=96

# Choose the dimensions for the figure (here 480x480)
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

bars = ('A','B','C','D','E')

# Create bars
plt.bar(y_pos, height)

# Create names on the x-axis
plt.xticks(y_pos, bars)
plt.xlabel('category', fontweight='bold', color = 'orange', fontsize='18')

# Save the figure and choose a name
plt.savefig('#7_custom_axis_name.png')

# Show graphic
plt.show()

my_dpi=96

# Choose the dimensions for the figure (here 480x480)
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

bars = ("very long group name 1","very long group name 2","very long group name 3","very long group name 4","very long group name 5")

# Create bars
plt.bar(y_pos, height)

# Rotation of the bars names
plt.xticks(y_pos, bars, rotation=90)

# Custom the subplot layout
plt.subplots_adjust(bottom=0.4, top=0.99)

# Save the figure and choose a name
plt.savefig('#7_increase_margin.png')

# Show graphic
plt.show()







# ———————————————————————————————————
#  #8 Confidence Interval on barplot

import numpy as np
import matplotlib.pyplot as plt

# Choose the dot per inch
my_dpi = 96

# Choose the dimensions for the figure (here 480x480)
plt.figure(figsize=(480 / my_dpi, 480 / my_dpi), dpi=my_dpi)

barWidth = 0.3

# Choose the height of the blue bars
bars1 = [10, 9, 2]

# Choose the height of the cyan bars
bars2 = [10.8, 9.5, 4.5]

# Choose the height of the error bars (bars1)
yer1 = [0.5, 0.4, 0.5]

# Choose the height of the error bars (bars2)
yer2 = [1, 0.7, 1]

r1 = np.arange(len(bars1))
r2 = [x + barWidth for x in r1]

# Create blue bars
plt.bar(r1, bars1, width = barWidth, color = 'blue', edgecolor = 'black', yerr=yer1, capsize=7, label='poacee')

# Create cyan bars
plt.bar(r2, bars2, width = barWidth, color = 'cyan', edgecolor = 'black', yerr=yer2, capsize=7, label='sorgho')

plt.xticks([r + barWidth for r in range(len(bars1))], ['cond_A', 'cond_B', 'cond_C'])

plt.ylabel('height')

# Create legend
plt.legend()

# Save the figure and choose a name
plt.savefig('#8_confidence_interval.png')

# Show graphic
plt.show()







# ———————————————————————————————————
#  #9 Plotting factors vs factors
# --> Cannot publish witout the source.

import matplotlib.pyplot as plt

# Choose the dot per inch
my_dpi = 96

# Choose the dimensions for the figure (here 480x480)
fig, ax1 = plt.subplots(figsize=(480 / my_dpi, 480 / my_dpi), dpi=my_dpi)

ax2 = ax1.twinx()

labels = " A: Stars, White Dwarfs and Solar System\n B: White Dwarf Binaries, Neutron Star Binaries, Cataclysmic Variables, ULXs and Black Holes\n C: Supernovae, Supernova Remnants, Diffuse (galactic) Emission and Isolated Neutron Stars\n D: Galaxies and Galactic Surveys\n E: Active Galactic Nuclei, Quasars and BL-Lac Objects\n F: Groups of Galaxies, Clusters of Galaxies and Superclusters\n G: Cosmology, Extragalactic Deep Fields and Area Surveys"

# Custom the textBox (data coordinates: x y, text, style)
plt.text(-2.7, -0.45, labels,  color='black', size=7,
         bbox=dict(facecolor='none', edgecolor='black', boxstyle='round,pad=0.1'))

# Height of green bars
bars1 = [0.3, 0.05, 0.1, 0.15, 0.25, 0.05, 0.19]

# Height of orange bars
bars2 = [0.25, 0.55, 0.55, 0.25, 0.3, 0.4, 0.4]

# Height of  blue bars
bars3 = [0.45, 0.4, 0.35, 0.6, 0.45, 0.55, 0.41]

# Height of bars1 + bars2
bars = [0.55, 0.6, 0.65, 0.4, 0.55, 0.45, 0.59]

# The position of the bars on the x-axis
r = [0,1.6,3.2,4.1,6.9,9.9,11]

# Height of the yticks
ytick = [0.10, 0.45, 0.80]

barWidth = [0.8,2,0.8,0.5,4.5,1,0.6]

names = ['A','B','C','D','E','F','G']

name = ['A', 'B', 'C']

# Create green bars
plt.bar(r, bars1, color='#B3E2CD', width=barWidth, edgecolor='black')

# Create orange bars
plt.bar(r, bars2, bottom=bars1, color='#FDCDAC',width=barWidth, edgecolor='black')

# Create blue bars
plt.bar(r, bars3, bottom=bars, color='#CBD5E8',width=barWidth, edgecolor='black')

plt.xticks(r, names)

plt.yticks(ytick, name)

plt.title("XMM AO7 accepted proposals", fontweight='bold')

ax1.set_xlabel("Science Category")

plt.ylabel("Priority")

plt.subplots_adjust(bottom=0.33, top=0.95)

# Save the figure and choose a name
plt.savefig('#9_plotting_factor_vs_factor.png')

# Show graphic
plt.show()




# ———————————————————————————————————
#  #10 Barplot with number of observations

import matplotlib.pyplot as plt

# Choose the dot per inch
my_dpi = 96

# Choose the dimensions for the figure (here 480x480)
plt.figure(figsize=(480 / my_dpi, 480 / my_dpi), dpi=my_dpi)

# The width of the bars
barWidth = 0.9

# Choose the height of the purple bars
bars1 = [3, 3, 1]

# Choose the height of the grey bars
bars2 = [4, 2, 3]

# Choose the height of the green bars
bars3 = [4, 6, 7, 10, 4, 4]

# Height of the bars (y)
bars4 =  bars1 + bars2 + bars3

# The position of the purple bars on the x-axis
r1 = [1,5,9]

# The position of the grey bars on the x-axis
r2 = [2,6,10]

# The position of the green bars on the x-axis
r3 = [3,4,7,8,11,12]

# The position of the bars on the x-axis (x)
r4 = r1 + r2 + r3

# Create purple bars
plt.bar(r1, bars1, width = barWidth, color = (0.3,0.1,0.4,0.6), label='Alone')

# Create grey bars
plt.bar(r2, bars2, width = barWidth, color = (0.3,0.5,0.4,0.6), label='With Himself')

# Create green bars
plt.bar(r3, bars3, width = barWidth, color = (0.3,0.9,0.4,0.6), label='With other genotype')

# Create legend
plt.legend()

# Text below each barplot with a rotation at 90°
plt.xticks([r + barWidth for r in range(len(r4))], ['DD', 'with himself', 'with DC', 'with Silur', 'DC', 'with himself', 'with DD', 'with Silur', 'Silur', 'with himself', 'with DD', 'with DC'], rotation=90)

# Create labels
label = ['n = 6', 'n = 25', 'n = 13', 'n = 36', 'n = 30', 'n = 11', 'n = 16', 'n = 37', 'n = 14', 'n = 4', 'n = 31', 'n = 34']

# Text on the top of each barplot
for i in range(len(r4)):
    plt.text(x = r4[i]-0.5 , y = bars4[i]+0.1, s = label[i], size = 6)

# Adjust the location of the figure
plt.subplots_adjust(bottom= 0.2, top = 0.98)

# Save the figure and choose a name
plt.savefig('#10_barplot_with_number_of_observations.png')

# Show graphic
plt.show()







# ———————————————————————————————————
#  #11 - 12 - 13  Grouped and stacked barplot

import numpy as np
import matplotlib.pyplot as plt
from matplotlib import rc
import pandas as pd

# Choose the dot per inch
my_dpi = 96

# Choose the dimensions for the figure (here 480x480)
plt.figure(figsize=(480 / my_dpi, 480 / my_dpi), dpi=my_dpi)

# y-axis in bold
rc('font', weight='bold')

# Height of brown bars
bars1 = [12, 28, 1, 8, 22]

# Height of green bars (middle)
bars2 = [28, 7, 16, 4, 10]

# Height of green bars (top)
bars3 = [25, 3, 23, 25, 17]

# Heights of bars1 + bars2
bars = [40, 35, 17, 12, 32]

# The position of the bars on the x-axis
r = [0,1,2,3,4]

names = ['A','B','C','D','E']

barWidth = 1

# Create brown bars
plt.bar(r, bars1, color='#7f6d5f', edgecolor='white', width=barWidth)

# Create green bars (middle)
plt.bar(r, bars2, bottom=bars1, color='#557f2d', edgecolor='white', width=barWidth)

# Create green bars (top)
plt.bar(r, bars3, bottom=bars, color='#2d7f5e', edgecolor='white', width=barWidth)

plt.xticks(r, names,  fontweight='bold')

plt.xlabel("group")

# Save the figure and choose a name
plt.savefig('#12_stacked_barplot.png')

# Show graphic
plt.show()


# Choose the dot per inch
my_dpi = 96

# Choose the dimensions for the figure (here 480x480)
plt.figure(figsize=(480 / my_dpi, 480 / my_dpi), dpi=my_dpi)

barWidth = 0.25

# Height of brown bars
bars1 = [12, 30, 1, 8, 22]

# Height of green bars (second)
bars2 = [28, 6, 16, 5, 10]

# Height of green bars (third)
bars3 = [29, 3, 24, 25, 17]

r1 = np.arange(len(bars1))
r2 = [x + barWidth for x in r1]
r3 = [x + barWidth for x in r2]

# Create brown bars
plt.bar(r1, bars1, color='#7f6d5f', width=barWidth, edgecolor='white', label='var1')

# Create green bars (second)
plt.bar(r2, bars2, color='#557f2d', width=barWidth, edgecolor='white', label='var2')

# Create green bars (third)
plt.bar(r3, bars3, color='#2d7f5e', width=barWidth, edgecolor='white', label='var3')

plt.xlabel('group', fontweight='bold')

# Add xticks on the middle of the group bars
plt.xticks([r + barWidth for r in range(len(bars1))], ['A', 'B', 'C', 'D', 'E'])

# Create legend
plt.legend()

# Save the figure and choose a name
plt.savefig('#12_grouped_barplot.png')

# Show graphic
plt.show()


# Choose the dot per inch
my_dpi = 96

# Choose the dimensions for the figure (here 480x480)
plt.figure(figsize=(480 / my_dpi, 480 / my_dpi), dpi=my_dpi)

# The position of the bars on the x-axis
r = [0,1,2,3,4]

raw_data = {'greenBars': [20, 1.5, 7, 10, 5], 'orangeBars': [5, 15, 5, 10, 15],'blueBars': [2, 15, 18, 5, 10]}

df = pd.DataFrame(raw_data)

# Create the total
totals = [i+j+k for i,j,k in zip(df['greenBars'], df['orangeBars'], df['blueBars'])]

# Create the percentage
greenBars = [i / j * 100 for  i,j in zip(df['greenBars'], totals)]

# Create the percentage
orangeBars = [i / j * 100 for  i,j in zip(df['orangeBars'], totals)]

# Create the percentage
blueBars = [i / j * 100 for  i,j in zip(df['blueBars'], totals)]

barWidth = 0.85

names = ('A','B','C','D','E')

# Create green Bars
plt.bar(r, greenBars, color='#b5ffb9', edgecolor='white', width=barWidth)

# Create orange Bars
plt.bar(r, orangeBars, bottom=greenBars, color='#f9bc86', edgecolor='white', width=barWidth)

# Create blue Bars
plt.bar(r, blueBars, bottom=[i+j for i,j in zip(greenBars, orangeBars)], color='#a3acff', edgecolor='white', width=barWidth)

plt.xticks(r, names)

plt.xlabel("group")

# Save the figure and choose a name
plt.savefig('#12_stacked_percent_barplot.png')

# Show graphic
plt.show()











  -----------------------------------------
 |											|
 |											|
 |  SERIE #20 -> #30 HISTOGRAM SEABORN
 |											|
 |											|
  -----------------------------------------



# ———————————————————————————————————
#  #20 Basic Histogram | Seaborn

# Import library and dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Make default histogram of sepal length
p1=sns.distplot( df["sepal_length"] )
#sns.plt.show()

#save 
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#20_Basic_Histogram_seaborn1.png')

# Note that you can control the number of bins 
p2=sns.distplot( df["sepal_length"], bins=20 )
#sns.plt.show()

#save 
fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#20_Basic_Histogram_seaborn2.png')





# ———————————————————————————————————
#  #21 Control Rug and Distribution | Seaborn

# Import library and dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Hist only
p1=sns.distplot( a=df["sepal_length"], hist=True, kde=False, rug=False )
#sns.plt.show()
#save 
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#21_Display_Rug_and_distribution_on_hist1.png')

# Hist + Rug + kernel density
p2=sns.distplot( a=df["sepal_length"], hist=True, kde=True, rug=True )
#sns.plt.show()
fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#21_Display_Rug_and_distribution_on_hist2.png')

# To change parameters of rug 
p3=sns.distplot( a=df["sepal_length"], rug=True,
	rug_kws={"color": "r", "alpha":0.3, "linewidth": 2, "height":0.2 }
	)
#sns.plt.show()
fig = p3.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#21_Display_Rug_and_distribution_on_hist3.png')
	
	
# To change parameters of density distribution
p4=sns.distplot( a=df["sepal_length"], kde=True,
	kde_kws={"color": "g", "alpha":0.3, "linewidth": 5, "shade":True }
	)
#sns.plt.show()
fig = p4.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#21_Display_Rug_and_distribution_on_hist4.png')
	





# ———————————————————————————————————
#  #22 Control Color of histogram | Seaborn

# Import library and dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Color of bars:
sns.distplot( df["sepal_length"] , color="peru")
sns.plt.show()











# ———————————————————————————————————
#  #23 Vertical Histogram | Seaborn

# Import library and dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Vertical hist
p1=sns.distplot( df["sepal_length"] , color="skyblue", vertical=True)
#sns.plt.show()
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#23_Vertical_Histogram.png')







# ———————————————————————————————————
#  #24 Histogram with boxplot on top | Seaborn

# Import library and dataset
import seaborn as sns
import matplotlib.pyplot as plt
df = sns.load_dataset('iris')

# Choose the dot per inch
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Cut the window in 2 parts
f, (ax_box, ax_hist) = plt.subplots(2, sharex=True, gridspec_kw={"height_ratios": (.15, .85)})

# Add a graph in each part
sns.boxplot(df["sepal_length"], ax=ax_box)
sns.distplot(df["sepal_length"], ax=ax_hist)
ax_box.set(xlabel='')

# Save
plt.set_size_inches(4.8, 4.8)
plt.savefig('PNG/#24_Histogram_with_boxplot_on_top.png')

# -> Pas moyen de la sortir a la bonne taille mais tant pis...






# ———————————————————————————————————
#  #25 Histograms of 2 variables | Seaborn

# Import library and dataset
import seaborn as sns
import matplotlib.pyplot as plt
df = sns.load_dataset('iris')

# Method 1: on the same Axis
p1=sns.distplot( df["sepal_length"] , color="skyblue", label="Sepal Length")
p1=sns.distplot( df["sepal_width"] , color="red", label="Sepal Width")
p1=sns.plt.legend()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#25_Histogram_of_several_variables1.png')


# Method 2: using subplots
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

f, axes = plt.subplots(2, 2, figsize=(7, 7), sharex=True)
sns.distplot( df["sepal_length"] , color="skyblue", ax=axes[0, 0])
sns.distplot( df["sepal_width"] , color="olive", ax=axes[0, 1])
sns.distplot( df["petal_length"] , color="gold", ax=axes[1, 0])
sns.distplot( df["petal_width"] , color="teal", ax=axes[1, 1])

plt.savefig('PNG/#25_Histogram_of_several_variables2.png')

# --> link vers page faceting pour plus de détail.







# ———————————————————————————————————
#  #26 Bad chart: control size of bins!

# Import library and dataset
# TODO
import seaborn as sns
df = sns.load_dataset('iris')

# Color of bars:
sns.distplot( df["sepal_length"] , color="peru")
sns.plt.show()














  -----------------------------------------
 |											|
 |											|
 |  SERIE #30 -> #40 BOXPLOT SEABORN
 |											|
 |											|
  -----------------------------------------




# ———————————————————————————————————
#  #30 Basic Boxplot | Seaborn

# -- ONE VARIABLE

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Make boxplot for one group only
p1=sns.boxplot( y=df["sepal_length"] )
#sns.plt.show()

# save 
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#30_Basic_Box_seaborn1.png')


# -- ONE VARIABLE AND SEVERAL GROUPS

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

p2=sns.boxplot( x=df["species"], y=df["sepal_length"] )
#sns.plt.show()

# save 
fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#30_Basic_Box_seaborn2.png')


# -- SEVERAL VARIABLES

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

p3=sns.boxplot(data=df.ix[:,0:2])
#sns.plt.show()

# save 
fig = p3.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#30_Basic_Box_seaborn3.png')






# ———————————————————————————————————
#  #31 Horizontal Boxplot

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Just switch x and y
p1=sns.boxplot( y=df["species"], x=df["sepal_length"] )
#sns.plt.show()

# save 
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#31_Horizontal_Boxplot_Seaborn.png')

#Note: we can use the 'orient' version as well (="h" or ="v")



# ———————————————————————————————————
#  #32 Custom Appearance

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Change line width
p1=sns.boxplot( x=df["species"], y=df["sepal_length"], linewidth=5)
#sns.plt.show()

# save 
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#32_Custom_Boxplot_Appearance_Seaborn1.png')


# Add notch
p2=sns.boxplot( x=df["species"], y=df["sepal_length"], notch=True)
#sns.plt.show()

# save 
fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#32_Custom_Boxplot_Appearance_Seaborn2.png')


# Change width
p3=sns.boxplot( x=df["species"], y=df["sepal_length"], width=0.3)
#sns.plt.show()

# save 
fig = p3.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#32_Custom_Boxplot_Appearance_Seaborn3.png')




# ———————————————————————————————————
#  #33 Control color

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Use a color palette
p1=sns.boxplot( x=df["species"], y=df["sepal_length"], palette="Blues")

# You can use: 
# 	- Rcolorbrewer: Set1, Set2, Set3, Paired, 
#	- Sequential color palette: Blues, BuGn_r ...
# 	- other: husl
# save 
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#33_Custom_Boxplot_color_Seaborn1.png')

# Uniform color
import seaborn as sns
df = sns.load_dataset('iris')
p2=sns.boxplot( x=df["species"], y=df["sepal_length"], color="skyblue")
fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#33_Custom_Boxplot_color_Seaborn2.png')

# Specific color for each group
import seaborn as sns
df = sns.load_dataset('iris')
my_pal = {"versicolor": "g", "setosa": "b", "virginica":"m"}
p3=sns.boxplot( x=df["species"], y=df["sepal_length"], palette=my_pal)
fig = p3.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#33_Custom_Boxplot_color_Seaborn3.png')

# Highlight a group
import seaborn as sns
df = sns.load_dataset('iris')
my_pal = {species: "r" if species == "versicolor" else "b" for species in df.species.unique()}
p4=sns.boxplot( x=df["species"], y=df["sepal_length"], palette=my_pal)
fig = p4.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#33_Custom_Boxplot_color_Seaborn4.png')

# Add transparency. Inspired from mwaskom here: https://github.com/mwaskom/seaborn/issues/979
import seaborn as sns
df = sns.load_dataset('iris')
ax = sns.boxplot(x='species', y='sepal_length', data=df)
for patch in ax.artists:
    r, g, b, a = patch.get_facecolor()
    patch.set_facecolor((r, g, b, .3))
fig = ax.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#33_Custom_Boxplot_color_Seaborn5.png')
    






# ———————————————————————————————————
#  #34 Grouped boxplot

# library & dataset
import seaborn as sns
df = sns.load_dataset('tips')

# Grouped boxplot
p1=sns.boxplot(x="day", y="total_bill", hue="smoker", data=df, palette="Set1")
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#34_Grouped_Boxplot_Seaborn.png')






# ———————————————————————————————————
#  #35 control order of groups

# --- SPECIFIC ORDER

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

p1=sns.boxplot(x='species', y='sepal_length', data=df, order=["virginica", "versicolor", "setosa"])
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#35_Specific_order_Boxplot_Seaborn1.png')


# --- ORDERED BY MEDIAN

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Find the order
my_order = df.groupby(by=["species"])["sepal_length"].median().iloc[::-1].index
# Give it to the boxplot
p2=sns.boxplot(x='species', y='sepal_length', data=df, order=my_order)
fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#35_Specific_order_Boxplot_Seaborn2.png')




# ———————————————————————————————————
#  #36 add jitter over boxplot

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Y suffit d'ajouter swarmplot
ax = sns.boxplot(x='species', y='sepal_length', data=df)
ax = sns.swarmplot(x='species', y='sepal_length', data=df, color="grey")

fig = ax.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#36_Boxplot_with_Jitter_Seaborn.png')

# Note this could also be donne using stripplot







# ———————————————————————————————————
#  #37 Boxplot with variable width
 width=0.1
 






# ———————————————————————————————————
#  #38 Number of observation on boxplot

# library & dataset
import seaborn as sns, numpy as np
df = sns.load_dataset("iris")
ax = sns.boxplot(x="species", y="sepal_length", data=df)

# Calculate number of obs per group & median to position labels
medians = df.groupby(['species'])['sepal_length'].median().values
nobs = df['species'].value_counts().values
nobs = [str(x) for x in nobs.tolist()]
nobs = ["n: " + i for i in nobs]

# Add it to the plot
pos = range(len(nobs))
for tick,label in zip(pos,ax.get_xticklabels()):
    ax.text(pos[tick], medians[tick] + 0.03, nobs[tick], 
            horizontalalignment='center', size='x-small', color='w', weight='semibold')

sns.plt.show()

fig = ax.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#38_Number_of_obs_on_boxplot_seaborn.png')




            
            
            
            
# ———————————————————————————————————
#  #39 Bad Boxplot 1: not enough detail

# REASON 1 = number of data
# REASON 2 = structure of underlying data

# libraries and data
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
import pandas as pd

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi))
           
# Dataset:
a = pd.DataFrame({ 'group' : np.repeat('A',500), 'value': np.random.normal(10, 5, 500) })
b = pd.DataFrame({ 'group' : np.repeat('B',500), 'value': np.random.normal(13, 1.2, 500) })
c = pd.DataFrame({ 'group' : np.repeat('B',500), 'value': np.random.normal(18, 1.2, 500) })
d = pd.DataFrame({ 'group' : np.repeat('C',20), 'value': np.random.normal(25, 4, 20) })
e = pd.DataFrame({ 'group' : np.repeat('D',100), 'value': np.random.uniform(12, size=100) })
df=a.append(b).append(c).append(d).append(e)

# Usual boxplot
sns.boxplot(x='group', y='value', data=df)
plt.savefig('PNG/#39_Bad_boxplot1.png', dpi=my_dpi, bbox_inches='tight')

# FIX IT

# Add jitter with the swarmplot function.
ax = sns.boxplot(x='group', y='value', data=df)
ax = sns.stripplot(x='group', y='value', data=df, color="orange",  jitter=0.2, size=2.5)
plt.title("Boxplot with jitter", loc="left")
plt.savefig('PNG/#39_Bad_boxplot2.png', dpi=my_dpi, bbox_inches='tight')

# Use violin plot
sns.violinplot( x='group', y='value', data=df)
plt.title("Violin plot", loc="left")
plt.savefig('PNG/#39_Bad_boxplot3.png', dpi=my_dpi, bbox_inches='tight')


# SHow number of data point. See graph #38
sns.boxplot(x="group", y="value", data=df)

# Calculate number of obs per group & median to position labels
medians = df.groupby(['group'])['value'].median().values
nobs = df.groupby("group").size().values
nobs = [str(x) for x in nobs.tolist()]
nobs = ["n: " + i for i in nobs]
 
# Add it to the plot
pos = range(len(nobs))
for tick,label in zip(pos,ax.get_xticklabels()):
   plt.text(pos[tick], medians[tick] + 0.4, nobs[tick], horizontalalignment='center', size='medium', color='w', weight='semibold')
 
plt.title("Boxplot with number of observation", loc="left")
plt.savefig('PNG/#39_Bad_boxplot4.png', dpi=my_dpi, bbox_inches='tight')

















  -----------------------------------------
 |											|
 |											|
 |  SERIE #40 -> #50  SEABORN SCATTERPLOT
 |											|
 |											|
  -----------------------------------------

# MANQUE !!!! : 
	- Scatter plot with rug
	- avec les distributions en haut et sur le coté


# ———————————————————————————————————
#  #40 Basic Scatterplot | Seaborn

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# use the function regplot to make a scatterplot
p1=sns.regplot(x=df["sepal_length"], y=df["sepal_width"])
#sns.plt.show()

# save 
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#40_Scatterplot_with_regression_fit_seaborn.png')


# Without regression fit:
p2=sns.regplot(x=df["sepal_length"], y=df["sepal_width"], fit_reg=False)
#sns.plt.show()

# save 
fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#40_Basic_Scatterplot_seaborn.png')






# ———————————————————————————————————
#  #41 Control marker features | Seaborn

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Change shape of marker
p1=sns.regplot(x=df["sepal_length"], y=df["sepal_width"], marker="+", fit_reg=False)
#sns.plt.show()

# save 
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#41_Scatterplot_change_marker_shape_seaborn.png')

# TODO : figure avec toutes les possibilités.
#[0, 1, 2, 3, 4, u'D', 6, 7, 8, u's', u'|', 11, u'None', u'P', 9, u'x', u'X', 5, u'_', u'^', u' ', None, u'd', u'h', u'+', u'*', u',', u'o', u'.', u'1', u'p', u'3', u'2', u'4', u'H', u'v', u'', u'8', 10, u'<', u'>']
x=np.repeat(range(1,4),3)
y=range(1,4)*3
marker=range(1,10)
df=pd.DataFrame({'x': x, 'y': y, 'marker': marker })
sns.regplot( x=df['x'], y=df['y'], marker=u'x', fit_reg=False)
sns.plt.show()


import numpy as np
import matplotlib.pyplot as plt


import matplotlib.pyplot as plt
x=np.repeat(range(1,4),3)
y=range(1,4)*3
plt.scatter(x, y, s=100, c='blue', alpha=0.8, marker=range(1,7) )
plt.show()









all_shapes=markers.MarkerStyle.markers.keys()
sns.regplot( x=1, y=1, marker=all_shapes[0], fit_reg=False)
sns.plt.show()




from matplotlib import markers
markers.MarkerStyle.markers.keys()
# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')
p1=sns.regplot(x=df["sepal_length"], y=df["sepal_width"], marker=3, fit_reg=False)
sns.plt.show()

# More marker customization:
p2=sns.regplot(x=df["sepal_length"], y=df["sepal_width"], fit_reg=False, scatter_kws={"color":"darkred","alpha":0.3,"s":200} )
#sns.plt.show()

# save 
fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#41_Scatterplot_change_marker_color_seaborn.png')







# ———————————————————————————————————
#  #42  Custom linear regression fit

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# plot
p1=sns.regplot(x=df["sepal_length"], y=df["sepal_width"], line_kws={"color":"r","alpha":0.7,"lw":5})
#sns.plt.show()


# save 
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#42_Scatterplot_custom_linear_fit_seaborn.png')







# ———————————————————————————————————
#  #43  map a color to a variable

# We use the lm function, not the regplot function
# This function combines regplot() and FacetGrid. It is intended as a convenient interface to fit regression models across conditional subsets of a dataset.
# see http://seaborn.pydata.org/generated/seaborn.lmplot.html

# We can control color on individual points in regplot as well, see graph #45



# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
# Use the 'hue' argument to provide a factor variable
sns.lmplot( x="sepal_length", y="sepal_width", data=df, fit_reg=False, hue='species', legend=False)
# Move the legend to an empty part of the plot
plt.legend(loc='lower right')
#sns.plt.show()
plt.savefig('PNG/#43_seaborn_map_color_to_a_avariable1.png')




# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
# Use the 'hue' argument to provide a factor variable
sns.lmplot( x="sepal_length", y="sepal_width", data=df, fit_reg=False, hue='species', legend=False,  markers=["o", "x", "1"])
# Move the legend to an empty part of the plot
plt.legend(loc='lower right')
#sns.plt.show()
plt.savefig('PNG/#43_seaborn_map_color_to_a_avariable2.png')


# Use another palette
# possibilities:     deep, muted, bright, pastel, dark, colorblind

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
# Use the 'hue' argument to provide a factor variable
sns.lmplot( x="sepal_length", y="sepal_width", data=df, fit_reg=False, hue='species', legend=False,  palette="Set2")
# Move the legend to an empty part of the plot
plt.legend(loc='lower right')
#sns.plt.show()
plt.savefig('PNG/#43_seaborn_map_color_to_a_avariable3.png')


# Specific color for each group:
# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
# Use the 'hue' argument to provide a factor variable
sns.lmplot( x="sepal_length", y="sepal_width", data=df, fit_reg=False, hue='species', legend=False,  palette=dict(setosa="#9b59b6", virginica="#3498db", versicolor="#95a5a6"))
# Move the legend to an empty part of the plot
plt.legend(loc='lower right')
#sns.plt.show()
plt.savefig('PNG/#43_seaborn_map_color_to_a_avariable4.png')





# ———————————————————————————————————
#  #44  Control xlim and ylim


# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)


# Use the 'hue' argument to provide a factor variable
p1=sns.lmplot( x="sepal_length", y="sepal_width", data=df, fit_reg=False)
#sns.plt.show()


sns.plt.ylim(0, 20)
sns.plt.xlim(0, None)


plt.savefig('PNG/#44_seaborn_control_axis_limits.png')




# ———————————————————————————————————
#  #45 color depends x and y value

import pandas as pd
import numpy as np
import matplotlib.pylab as plt
import seaborn as sns

np.random.seed(0)

# Create dataframe
df = pd.DataFrame(np.random.random((100,2)), columns=["x","y"])
value=(df['x']>0.2) & (df['y']>0.4)
df['color']= np.where( value==True , "#9b59b6", "#3498db")


p1=sns.regplot(data=df, x="x", y="y", fit_reg=False, scatter_kws={'facecolors':df['color']})
#sns.plt.show()


fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#45_set_color_of_each_point_in_scatterplot_seaborn.png')







# ———————————————————————————————————
#  #46 Add annotation to points

# Basic scatterplot

import pandas as pd
import numpy as np
import matplotlib.pylab as plt
import seaborn as sns

# Create dataframe
df = pd.DataFrame({
	'x': [1, 1.5, 3, 4, 5], 
	'y': [5, 15, 5, 10, 2],
	'group': ['A','other group','B','C','D']
	})

p1=sns.regplot(data=df, x="x", y="y", fit_reg=False, marker="+", color="skyblue")
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#46_add_text_annotation_scatterplot_seaborn1.png')



# Add ONE annotation
import pandas as pd
import numpy as np
import matplotlib.pylab as plt
import seaborn as sns

# Create dataframe
df = pd.DataFrame({
	'x': [1, 1.5, 3, 4, 5], 
	'y': [5, 15, 5, 10, 2],
	'group': ['A','other group','B','C','D']
	})

p1=sns.regplot(data=df, x="x", y="y", fit_reg=False, marker="o", color="skyblue", scatter_kws={'s':400})
p1.text(3+0.2, 4.5, "An annotation", horizontalalignment='left', size='medium', color='black', weight='semibold')
#sns.plt.show()


fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#46_add_text_annotation_scatterplot_seaborn2.png')



# Add SEVERAL annotations in a loop
import pandas as pd
import numpy as np
import matplotlib.pylab as plt
import seaborn as sns

# Create dataframe
df = pd.DataFrame({
	'x': [1, 1.5, 3, 4, 5], 
	'y': [5, 15, 5, 10, 2],
	'group': ['A','other group','B','C','D']
	})

p1=sns.regplot(data=df, x="x", y="y", fit_reg=False, marker="o", color="skyblue", scatter_kws={'s':400})
for line in range(0,df.shape[0]):
	p1.text(df.x[line]+0.2, df.y[line], df.group[line], horizontalalignment='left', size='medium', color='black', weight='semibold')
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#46_add_text_annotation_scatterplot_seaborn3.png')



  -----------------------------------------
 |											|
 |											|
 |  SERIE #50 -> #60  SEABORN VIOLINPLOT
 |											|
 |											|
  -----------------------------------------


En gros un violin plot c'est quasi la meme chose qu'un boxplot
Donc je peux reprendre la meme section et la dupliquer plus ou moins..



# ———————————————————————————————————
#  #50 Basic Violinplot | Seaborn

# -- ONE VARIABLE

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Make boxplot for one group only
p1=sns.violinplot( y=df["sepal_length"] )
#sns.plt.show()

# save 
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#50_Basic_Violin_seaborn1.png')


# -- ONE VARIABLE AND SEVERAL GROUPS

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

p2=sns.violinplot( x=df["species"], y=df["sepal_length"] )
#sns.plt.show()

# save 
fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#50_Basic_Violin_seaborn2.png')


# -- SEVERAL VARIABLES

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

p3=sns.violinplot(data=df.ix[:,0:2])
#sns.plt.show()

# save 
fig = p3.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#50_Basic_Violin_seaborn3.png')






# ———————————————————————————————————
#  #51 Horizontal violinplot

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Just switch x and y
p1=sns.violinplot( y=df["species"], x=df["sepal_length"] )
#sns.plt.show()

# save 
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#51_Horizontal_violinplot_Seaborn.png')

#Note: we can use the 'orient' version as well (="h" or ="v")






# ———————————————————————————————————
#  #52 Custom Appearance

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Change line width
p1=sns.violinplot( x=df["species"], y=df["sepal_length"], linewidth=5)
#sns.plt.show()

# save 
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#52_Custom_violinplot_Appearance_Seaborn1.png')


# Change width
p3=sns.violinplot( x=df["species"], y=df["sepal_length"], width=0.3)
#sns.plt.show()

# save 
fig = p3.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#52_Custom_violinplot_Appearance_Seaborn3.png')




# ———————————————————————————————————
#  #53 Control color

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Use a color palette
p1=sns.violinplot( x=df["species"], y=df["sepal_length"], palette="Blues")

# You can use: 
# 	- Rcolorbrewer: Set1, Set2, Set3, Paired, 
#	- Sequential color palette: Blues, BuGn_r ...
# 	- other: husl
# save 
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#53_Custom_violinplot_color_Seaborn1.png')

# Uniform color
import seaborn as sns
df = sns.load_dataset('iris')
p2=sns.violinplot( x=df["species"], y=df["sepal_length"], color="skyblue")
fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#53_Custom_violinplot_color_Seaborn2.png')

# Specific color for each group
import seaborn as sns
df = sns.load_dataset('iris')
my_pal = {"versicolor": "g", "setosa": "b", "virginica":"m"}
p3=sns.violinplot( x=df["species"], y=df["sepal_length"], palette=my_pal)
fig = p3.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#53_Custom_violinplot_color_Seaborn3.png')

# Highlight a group
import seaborn as sns
df = sns.load_dataset('iris')
my_pal = {species: "r" if species == "versicolor" else "b" for species in df.species.unique()}
p4=sns.violinplot( x=df["species"], y=df["sepal_length"], palette=my_pal)
fig = p4.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#53_Custom_violinplot_color_Seaborn4.png')







# ———————————————————————————————————
#  #54 Grouped violinplot

# library & dataset
import seaborn as sns
df = sns.load_dataset('tips')

# Grouped violinplot
p1=sns.violinplot(x="day", y="total_bill", hue="smoker", data=df, palette="Pastel1")
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#54_Grouped_violinplot_Seaborn.png')






# ———————————————————————————————————
#  #55 control order of groups

# --- SPECIFIC ORDER

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

p1=sns.violinplot(x='species', y='sepal_length', data=df, order=[ "versicolor", "virginica", "setosa"])
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#55_Specific_order_violinplot_Seaborn1.png')


# --- ORDERED BY MEDIAN

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Find the order
my_order = df.groupby(by=["species"])["sepal_length"].median().iloc[::-1].index
# Give it to the violinplot
p2=sns.violinplot(x='species', y='sepal_length', data=df, order=my_order)
fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#55_Specific_order_violinplot_Seaborn2.png')










# ———————————————————————————————————
#  #57 violinplot with variable width
 width=0.1
 






# ———————————————————————————————————
#  #58 Number of observation on violinplot


# library & dataset
import seaborn as sns, numpy as np
df = sns.load_dataset("iris")
ax = sns.violinplot(x="species", y="sepal_length", data=df)

# Calculate number of obs per group & median to position labels
medians = df.groupby(['species'])['sepal_length'].median().values
nobs = df['species'].value_counts().values
nobs = [str(x) for x in nobs.tolist()]
nobs = ["n: " + i for i in nobs]

# Add it to the plot
pos = range(len(nobs))
for tick,label in zip(pos,ax.get_xticklabels()):
    ax.text(pos[tick], medians[tick] + 0.03, nobs[tick], 
            horizontalalignment='center', size='x-small', color='w', weight='semibold')

sns.plt.show()

fig = ax.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#58_Number_of_obs_on_violinplot_seaborn.png')













  -----------------------------------------
 |											|
 |											|
 |  SERIE #60 -> #70  SEABORN BARPLOT
 |											|
 |											|
  -----------------------------------------



# ———————————————————————————————————
#  #60 Basic barplot

# On a 3 cas de figure pour faire un barplot

# ---- ONE VALUE PER GROUP

# Import library 
import seaborn as sns
import pandas as pd

# Create a small dataset
df = pd.DataFrame()
df['group'] = ['A','B','C']
df['value'] =  [12, 4, 8]

# barplot
p1=sns.barplot( data=df, x='group', y='value' )
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#60_Basic_barplot_Seaborn1.png')



# ---- SEVERAL VALUES PER GROUP

# Import library and dataset
import seaborn as sns
df = sns.load_dataset('iris')

# barplot
p2=sns.barplot( data=df, x='species', y='sepal_length' )
#sns.plt.show()

fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#60_Basic_barplot_Seaborn2.png')


# --- COUNT THE OCCURENCE OF EACH GROUP

# Import library and dataset
import seaborn as sns
df = sns.load_dataset('iris')

# barplot
p3=sns.countplot(data=df, x="species")
#sns.plt.show()

fig = p3.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#60_Basic_barplot_Seaborn3.png')









# ———————————————————————————————————
#  #61 Custom apearance

# Import library and dataset
import seaborn as sns
df = sns.load_dataset('iris')

# barplot
p1=sns.barplot( data=df, x='species', y='sepal_length', linewidth=5, edgecolor='orange' )
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#61_custom_appearance_barplot_Seaborn1.png')

# TODO
- theme





# ———————————————————————————————————
#  #62 Control colors

# Import library and dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Uniform color
p1=sns.barplot( data=df, x='species', y='sepal_length', facecolor="skyblue")
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#62_control_barplot_color_Seaborn1.png')

# Discrete palette
import seaborn as sns
df = sns.load_dataset('iris')
p2=sns.barplot( data=df, x='species', y='sepal_length', palette="Set2" )
#sns.plt.show()

fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#62_control_barplot_color_Seaborn2.png')


# Continuous palette
import seaborn as sns
df = sns.load_dataset('iris')
p3=sns.barplot( data=df, x='species', y='sepal_length', palette="Blues_d")
#sns.plt.show()

fig = p3.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#62_control_barplot_color_Seaborn3.png')


# Highlight a group
TO DO --> face color ca donne juste du RGB..
import seaborn as sns
df = sns.load_dataset('iris')
p4=sns.barplot( data=df, x='species', y='sepal_length', facecolor=(0.2,0.4,0.7,0.2) )
#sns.plt.show()

fig = p4.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#62_control_barplot_color_Seaborn4.png')






# ———————————————————————————————————
#  #63 Horizontal barplot 

# Import library and dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Make default histogram
p1=sns.barplot( data=df, y='species', x='sepal_length' )
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#63_Horizontal_barplot_Seaborn1.png')





# ———————————————————————————————————
#  #64 Grouped barplot 

# Import library and dataset
import seaborn as sns
df = sns.load_dataset('tips')

# plot
p1=sns.barplot(x="day", y="total_bill", hue="sex", data=df)
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#64_grouped_barplot_Seaborn1.png')





# ———————————————————————————————————
#  #65 Control order of groups 

@TODO : change data set to have more groups

# Import library and dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Order with manual order
p1=sns.barplot( data=df, x='species', y='sepal_length', order=["versicolor", "virginica", "setosa"] )
sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#65_ordered_barplot_Seaborn1.png')

# Order by decreasing means
from numpy import median
p2=sns.barplot( data=df, x='species', y='sepal_length', estimator=-median )
sns.plt.show()

fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#65_ordered_barplot_Seaborn2.png')





# ———————————————————————————————————
#  #66 Custom error bars

# Import library and dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Add cap
p1=sns.barplot( data=df, x='species', y='sepal_length' , capsize=.2)
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#66_custom_error_bars_Seaborn1.png')

# Which confidence interval do u want to show?
import seaborn as sns
df = sns.load_dataset('iris')
p2=sns.barplot( data=df, x='species', y='sepal_length' , capsize=.2,  ci=99)
#sns.plt.show()

fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#66_custom_error_bars_Seaborn2.png')

# Change color
import seaborn as sns
df = sns.load_dataset('iris')
p3=sns.barplot( data=df, x='species', y='sepal_length' , capsize=.2,  errcolor="g")
#sns.plt.show()

fig = p3.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#66_custom_error_bars_Seaborn3.png')








  -----------------------------------------
 |											|
 |											|
 |  SERIE #70 -> #80  SEABORN DENSITY PLOT
 |											|
 |											|
  -----------------------------------------






# ———————————————————————————————————
#  #70 Density Plot basic

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Make default density plot
p1=sns.kdeplot(df['sepal_width'])
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#70_Basic_density_plot_Seaborn.png')



# ———————————————————————————————————
#  #71 Density Plot with shade

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Make default density plot
p1=sns.kdeplot(df['sepal_width'], shade=True)
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#71_Shaded_density_plot_Seaborn.png')




# ———————————————————————————————————
#  #72 horizontal Density Plot with shade

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Make default density plot
p1=sns.kdeplot(df['sepal_width'], shade=True, vertical=True, color="skyblue")
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#72_Horizontal_density_plot_Seaborn.png')




# ———————————————————————————————————
#  #73 Control bandwidth of Density Plot

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Large bandwidth
p1=sns.kdeplot(df['sepal_width'], shade=True, bw=.5, color="olive")
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#73_Control_bandwidth_densityplot_Seaborn1.png')


# Narrower bandwidth
import seaborn as sns
df = sns.load_dataset('iris')
p2=sns.kdeplot(df['sepal_width'], shade=True, bw=.05, color="olive")
#sns.plt.show()

fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#73_Control_bandwidth_densityplot_Seaborn2.png')






# ———————————————————————————————————
#  #74 Density plot for several variables

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# plot of 2 variables
p1=sns.kdeplot(df['sepal_width'], shade=True, color="r")
p1=sns.kdeplot(df['sepal_length'], shade=True, color="b")
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#74_density_plot_multi_variables.png')





JOYPLOT TODO
https://github.com/sbebo/joypy







  -----------------------------------------
 |											|
 |											|
 |  SERIE #80 -> #90  SEABORN AND MATPLOTLIB DENSITY 2D 
 |											|
 |											|
  -----------------------------------------

# Density plot. On fait comme un scatterplot, mais on regarde le nimbre de point a chaque endroit et 
# on color en fonction.
# On utilise la fonction kde plot = la meme que pour les density plots

# Il faut trouver un data set avec plus de point.
# Le but de ce genre de graphique c'est d'éviter le overplotting.

# Donc on gros on part d'un scatter plot avec overplot, et on regle le probleme avec plusieurs solutions:
- Hexbin
- 2D histogram
- Contour plot = density plot 2D

# Selon l'objectif j'utiliserai matplotlb ou seaborn.


# Repo
import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd



# ———————————————————————————————————
#  #80 Contour plot with seaborn

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Basic 2D density plot
sns.set_style("white")
p1 = sns.kdeplot(df.sepal_width, df.sepal_length)
#sns.plt.show()
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#80_bivariate_kernel_density_plot1.png')

# Custom it with the same argument as 1D density plot
p1 = sns.kdeplot(df.sepal_width, df.sepal_length, cmap="Reds", shade=True, bw=.15)
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#80_bivariate_kernel_density_plot2.png')

# Some features are characteristic of 2D: color palette and wether or not color the lowest range
p1 = sns.kdeplot(df.sepal_width, df.sepal_length, cmap="Blues", shade=True, shade_lowest=True, )
sns.plt.show()
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#80_bivariate_kernel_density_plot3.png')






# ———————————————————————————————————
#  #81 VIDE








# ———————————————————————————————————
#  #82 jointplot with seaborn

# On peut aussi utiliser la fonction jointplot pour faire un density 2D graph et ajouter des ditributions au dessus:
# https://seaborn.pydata.org/generated/seaborn.jointplot.html

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# jointplot
import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Default Joinplot
#sns.jointplot(x=df["sepal_length"], y=df["sepal_width"])
#plt.savefig('PNG/#82_seaborn_jointplot1.png')


# Custom the inside plot:  options are: “scatter” | “reg” | “resid” | “kde” | “hex” 
#sns.jointplot(x=df["sepal_length"], y=df["sepal_width"], kind='scatter')
#sns.jointplot(x=df["sepal_length"], y=df["sepal_width"], kind='hex')
#plt.savefig('PNG/#82_seaborn_jointplot2.png')
#sns.jointplot(x=df["sepal_length"], y=df["sepal_width"], kind='kde')
#plt.savefig('PNG/#82_seaborn_jointplot3.png')

# Then you can pass arguments to each type:
#sns.jointplot(x=df["sepal_length"], y=df["sepal_width"], kind='scatter', s=200, color='m', edgecolor="skyblue", linewidth=2)
#plt.savefig('PNG/#82_seaborn_jointplot4.png')

# Custom the color
#sns.set(style="white", color_codes=True)
#sns.jointplot(x=df["sepal_length"], y=df["sepal_width"], kind='kde', color="skyblue")
#plt.savefig('PNG/#82_seaborn_jointplot5.png')

# Custom marginal plots
#sns.jointplot(x=df["sepal_length"], y=df["sepal_width"], kind='hex', marginal_kws=dict(bins=30, rug=True))
#plt.savefig('PNG/#82_seaborn_jointplot6.png')


# Space
#sns.jointplot(x=df["sepal_length"], y=df["sepal_width"], kind='kde', color="grey", space=0)
#plt.savefig('PNG/#82_seaborn_jointplot7.png')
#sns.jointplot(x=df["sepal_length"], y=df["sepal_width"], kind='kde', color="grey", space=3)
#plt.savefig('PNG/#82_seaborn_jointplot8.png')

# Ratio
sns.jointplot(x=df["sepal_length"], y=df["sepal_width"], kind='kde',ratio=1)
plt.savefig('PNG/#82_seaborn_jointplot9.png')

#




#sns.plt.show()

#sns.plt.show()
plt.savefig('PNG/#82_jointplot1.png')










# ———————————————————————————————————
#  #83 Basic histogram 2D with matplotlib

# We use the plt.hist2d function
# hist2d(x, y, bins=10, range=None, normed=False, weights=None, cmin=None, cmax=None, hold=None, **kwargs)

# libraries
import matplotlib.pyplot as plt
import numpy as np

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# create data
x = np.random.normal(size=50000)
y = x * 3 + np.random.normal(size=50000)


# Make the plot
plt.hist2d(x, y, bins=(50, 50), cmap=plt.cm.jet)
plt.savefig('PNG/#83_2D_Histogram_matplotlib_1.png', dpi=96)
#plt.show()
plt.gca()

# We can control the size of the bins:
plt.hist2d(x, y, bins=(300, 300), cmap=plt.cm.jet)
plt.savefig('PNG/#83_2D_Histogram_matplotlib_2.png', dpi=96)
plt.gca()
#plt.show()

plt.hist2d(x, y, bins=(300, 30), cmap=plt.cm.jet)
plt.savefig('PNG/#83_2D_Histogram_matplotlib_3.png', dpi=96)
plt.gca()
#plt.show()

# Control the color
# For palettes see: https://matplotlib.org/examples/color/colormaps_reference.html
plt.hist2d(x, y, bins=(50, 50), cmap=plt.cm.Reds)
plt.savefig('PNG/#83_2D_Histogram_matplotlib_4.png', dpi=96)
plt.gca()
#plt.show()
plt.hist2d(x, y, bins=(50, 50), cmap=plt.cm.BuPu)
plt.savefig('PNG/#83_2D_Histogram_matplotlib_5.png', dpi=96)
plt.gca()
#plt.show()


# Add a colorbar if necessary
plt.hist2d(x, y, bins=(50, 50), cmap=plt.cm.Greys)
plt.colorbar()
plt.savefig('PNG/#83_2D_Histogram_matplotlib_6.png', dpi=96)
#plt.show()








# ———————————————————————————————————
#  #84 Basic Hexbin with matplotlib

# libraries
import matplotlib.pyplot as plt
import numpy as np

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# create data
x = np.random.normal(size=50000)
y = (x * 3 + np.random.normal(size=50000)) * 5

# Make the plot
plt.hexbin(x, y, gridsize=(15,15) )
plt.savefig('PNG/#84_hexbin_matplotlib_1.png', dpi=96)
#plt.show()
plt.gca()

# We can control the size of the bins:
plt.hexbin(x, y, gridsize=(150,150) )
plt.savefig('PNG/#84_hexbin_matplotlib_2.png', dpi=96)
plt.gca()
#plt.show()


# Control the color
# For palettes see: https://matplotlib.org/examples/color/colormaps_reference.html
plt.hexbin(x, y, gridsize=(25,25), cmap=plt.cm.Greens)
plt.savefig('PNG/#84_hexbin_matplotlib_3.png', dpi=96)
plt.gca()
#plt.show()
plt.hexbin(x, y, gridsize=(25,25), cmap=plt.cm.BuGn_r)
plt.savefig('PNG/#84_hexbin_matplotlib_4.png', dpi=96)
plt.gca()
#plt.show()


# Add a colorbar if necessary
plt.hexbin(x, y, gridsize=(25,25), cmap=plt.cm.Purples_r)
plt.colorbar()
plt.savefig('PNG/#84_hexbin_matplotlib_5.png', dpi=96)
#plt.show()





# ———————————————————————————————————
#  #85 Kernel density estimate (KDE) and contour with matplotlib

# inspired from https://stackoverflow.com/questions/19390320/scatterplot-contours-in-matplotlib
#Make a kernel-density estimate (KDE) and contour the results. A KDE is essentially a smoothed histogram. Instead of a point falling into a particular bin, it adds a weight to surrounding bins (usually in the shape of a gaussian "bell curve").

# libraries
import matplotlib.pyplot as plt
import numpy as np
from scipy.stats import kde

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# create data
x = np.random.normal(size=500)
y = x * 3 + np.random.normal(size=500)

# Evaluate a gaussian kde on a regular grid of nbins x nbins over data extents
nbins=300
k = kde.gaussian_kde([x,y])
xi, yi = np.mgrid[x.min():x.max():nbins*1j, y.min():y.max():nbins*1j]
zi = k(np.vstack([xi.flatten(), yi.flatten()]))

# Make the plot
plt.pcolormesh(xi, yi, zi.reshape(xi.shape))
plt.savefig('PNG/#85_2D_density_plot_matplotlib_1.png', dpi=96)
#plt.show()
plt.gca()

# Change color palette
plt.pcolormesh(xi, yi, zi.reshape(xi.shape), cmap=plt.cm.Greens_r)
plt.savefig('PNG/#85_2D_density_plot_matplotlib_2.png', dpi=96)
#plt.show()
plt.gca()

# Add color bar
plt.pcolormesh(xi, yi, zi.reshape(xi.shape), cmap=plt.cm.Greens_r)
plt.colorbar()
plt.savefig('PNG/#85_2D_density_plot_matplotlib_3.png', dpi=96)
#plt.show()
plt.gca()







# ———————————————————————————————————
#  #86 Explanations of differences
 #Highly inspired from https://stackoverflow.com/questions/19390320/scatterplot-contours-in-matplotlib

# Libraries
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import kde

# Create data: 200 points
data = np.random.multivariate_normal([0, 0], [[1, 0.5], [0.5, 3]], 200)
x, y = data.T

# Create a figure with 6 plot areas
fig, axes = plt.subplots(ncols=6, nrows=1, figsize=(21, 5)) #, sharex=True, sharey=True)


# Everything sarts with a Scatterplot
axes[0].set_title('Scatterplot')
axes[0].plot(x, y, 'ko')
# As you can see there is a lot of overplottin here!

# Thus we can cut the plotting window in several hexbins
nbins = 20
axes[1].set_title('Hexbin')
axes[1].hexbin(x, y, gridsize=nbins, cmap=plt.cm.BuGn_r)

# 2D Histogram
axes[2].set_title('2D Histogram')
axes[2].hist2d(x, y, bins=nbins, cmap=plt.cm.BuGn_r)

# Evaluate a gaussian kde on a regular grid of nbins x nbins over data extents
k = kde.gaussian_kde(data.T)
xi, yi = np.mgrid[x.min():x.max():nbins*1j, y.min():y.max():nbins*1j]
zi = k(np.vstack([xi.flatten(), yi.flatten()]))

# plot a density
axes[3].set_title('Calculate Gaussian KDE')
axes[3].pcolormesh(xi, yi, zi.reshape(xi.shape), cmap=plt.cm.BuGn_r)

# add shading
axes[4].set_title('2D Density with shading')
axes[4].pcolormesh(xi, yi, zi.reshape(xi.shape), shading='gouraud', cmap=plt.cm.BuGn_r)

# contour
axes[5].set_title('Contour')
axes[5].pcolormesh(xi, yi, zi.reshape(xi.shape), shading='gouraud', cmap=plt.cm.BuGn_r)
axes[5].contour(xi, yi, zi.reshape(xi.shape) )

plt.savefig('PNG/#86_2D_density_plot_explanation.png', dpi=96)









  -----------------------------------------
 |											|
 |											|
 |  SERIE #90 -> #100  SEABORN HEATMAP 
 |											|
 |											|
  -----------------------------------------

# Plot rectangular data as a color-encoded matrix
# --> donc a priori, c'est juste une visualisation de la matrice.
# on a pas de méthode de clustering proposée.




# ———————————————————————————————————
#  #90 Default Heatmap & input format

# FORMAT 1: A rectangular format (untidy, wide)

# library
import seaborn as sns
import pandas as pd
import numpy as np

# Create a dataset (fake)
df = pd.DataFrame(np.random.random((5,5)), columns=["a","b","c","d","e"])

# Default heatmap: just a visualization of this square matrix
p1 = sns.heatmap(df)
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#90_Input_format_for_heatmap1.png')



# FORMAT 2: It is usefull for correlation matrix!
# library
import seaborn as sns
import pandas as pd
import numpy as np
np.random.seed(0)

# Create a dataset (fake)
df = pd.DataFrame(np.random.random((100,5)), columns=["a","b","c","d","e"])

# Calculate correlation between each pair of variable
corr_matrix=df.corr()

# plot it
p1 = sns.heatmap(corr_matrix, cmap='PuOr')
#sns.plt.show()
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#90_Input_format_for_heatmap2.png')

# Can be great to plot only a half matrix
mask = np.zeros_like(corr_matrix)
mask[np.triu_indices_from(mask)] = True
with sns.axes_style("white"):
	p2 = sns.heatmap(corr_matrix, mask=mask, square=True)
#sns.plt.show()
fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#90_Input_format_for_heatmap2bis.png')


# FORMAT 3: Long format (tidy)

# library
import seaborn as sns
import pandas as pd
import numpy as np

# Create long format
people=np.repeat(("A","B","C","D","E"),5)
feature=range(1,6)*5
value=np.random.random(25)
df=pd.DataFrame({'feature': feature, 'people': people, 'value': value })

# plot it
df_wide=df.pivot_table( index='people', columns='feature', values='value' )
p2=sns.heatmap( df_wide )
#sns.plt.show()

fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#90_Input_format_for_heatmap3.png')






# ———————————————————————————————————
#  #91 Customization on heatmap

# library
import seaborn as sns
import pandas as pd
import numpy as np

# Create a dataset (fake)
df = pd.DataFrame(np.random.random((10,10)), columns=["a","b","c","d","e","f","g","h","i","j"])

# Control lines between cells
p1 = sns.heatmap(df, linewidths=2, linecolor='yellow')
#sns.plt.show()

fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#91_Custom_heat_control_lines.png')


# Annotate each cell with the value
# TODO: control size of text.
p2 = sns.heatmap(df, annot=True, annot_kws={"size": 7})
#sns.plt.show()

fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#91_Custom_heat_annotate_cells.png')

# Do not show color bar
p3 = sns.heatmap(df, cbar=False)
#sns.plt.show()

fig = p3.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#91_Custom_heat_hide_colorbar.png')

# Show / hide axis label:
p4 = sns.heatmap(df, yticklabels=False)
#sns.plt.show()

fig = p4.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#91_Custom_heat_hide_axis_label.png')

# You can hide some of the label to avoid overlapping.
p5 = sns.heatmap(df, xticklabels=4)
#sns.plt.show()

fig = p5.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#91_Custom_heat_hide_some_axis_label.png')








# ———————————————————————————————————
#  #92 Control Color in heatmap

# library
import seaborn as sns
import pandas as pd
import numpy as np
np.random.seed(0)

# USE A SEQUENTIAL PALETTE
# Let's suppose you have a sequential data set, for exemple, valuers ranging from 0 to 1. You want to show if it
# is high or low, from clear to dark:

# Create a dataset (fake)
df = pd.DataFrame(np.random.random((10,10)), columns=["a","b","c","d","e","f","g","h","i","j"])

# ---- Choose another palette, but choose it sequential, here are a few example:
p1 = sns.heatmap(df, cmap="YlGnBu")
#sns.plt.show()
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#92_Control_color_heatmap1.png')
p1 = sns.heatmap(df, cmap="Blues")
#sns.plt.show()
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#92_Control_color_heatmap2.png')
p1 = sns.heatmap(df, cmap="BuPu")
#sns.plt.show()
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#92_Control_color_heatmap3.png')
p1 = sns.heatmap(df, cmap="Greens")
#sns.plt.show()
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#92_Control_color_heatmap4.png')
# --> link toward the color page.

# ---- Change the limits of the colormap:
p1 = sns.heatmap(df, vmin=0, vmax=0.5)
#sns.plt.show()
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#92_Control_color_heatmap5.png')
p1 = sns.heatmap(df, vmin=0.5, vmax=0.7)
#sns.plt.show()  
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#92_Control_color_heatmap6.png')



# USE A DIVERGING PALETTE

# If the data is centered on 0, you prefer to use a bi color palette.
# You can change the center value with center()
df = np.random.randn(30, 30)
p1 = sns.heatmap(df, cmap="PiYG")
#sns.plt.show()
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#92_Control_color_heatmap7.png')
# Other example of palette: Spectral, RdGy, RdBu, PuOr, PRGn, BrBG
# See: http://www.r-graph-gallery.com/38-rcolorbrewers-palettes/


# --- Control the color of the center
p1 = sns.heatmap(df, center=1)
#sns.plt.show()
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#92_Control_color_heatmap8.png')


# ---- Make the data discrete
#En gros on peut controler le nombre de couleur différentes, passer de continue a discret.
# 2 solutions:
	# -> on fait des bins également espacées 
	# -> On fait des bins avec le meme nombre de valeur par bin pandas.qcut¶

# library
import seaborn as sns
import pandas as pd
import numpy as np

# create data
df = pd.DataFrame(np.random.randn(6, 6))

# make it discrete
df_q = pd.DataFrame()
for col in df:
    df_q[col] = pd.to_numeric( pd.qcut(df[col], 3, labels=list(range(3))) )

# plot it
p1 = sns.heatmap(df_q)
#sns.plt.show()
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#92_Control_color_heatmap9.png')










# ———————————————————————————————————
#  #94 Use normalization on heatmap

# library
import seaborn as sns
import pandas as pd
import numpy as np

# BY COLUMN

# Create a dataframe where the average value of each column is really different
df = pd.DataFrame(np.random.randn(10,10) * 4 + 3)
df[1]=df[1]+40

# If we do a heatmap, we just observe that a column as higher values than others:
p1 = sns.heatmap(df, cmap='viridis')
#sns.plt.show()
fig = p1.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#94_Heatmap_Normalization_Seaborn1.png')


# Now if we normalize it by column. Let's do a min normalization:
df_norm_col=(df-df.mean())/df.std()
p2 = sns.heatmap(df_norm_col, cmap='viridis')
#sns.plt.show()
fig = p2.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#94_Heatmap_Normalization_Seaborn2.png')
# Other types of normalization exist so feel free to use your own.


# BY ROW
# The same mechanism works by row

# library
import seaborn as sns
import pandas as pd
import numpy as np
np.random.seed(0)

# Create a dataframe where the average value of each column is really different
df = pd.DataFrame(np.random.randn(10,10) * 4 + 3)
df.iloc[2]=df.iloc[2]+40

# If we do a heatmap, we just observe that a column as higher values than others:
p3 = sns.heatmap(df, cmap='viridis')
#sns.plt.show()
fig = p3.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#94_Heatmap_Normalization_Seaborn3.png')

# Normalize it by row: (not sure if it is the best way, please feel free to give me a better method.
# substract mean
df_norm_row=df.sub(df.mean(axis=1), axis=0)
# divide by standard dev
df_norm_row=df_norm_row.div( df.std(axis=1), axis=0 )

# And see the result
p4 = sns.heatmap(df_norm_row, cmap='viridis')
#sns.plt.show()
fig = p4.get_figure()
fig.set_size_inches(4.8, 4.8)
fig.savefig('PNG/#94_Heatmap_Normalization_Seaborn4.png')




	



# ———————————————————————————————————
#  #95 Use clusterization on matrix

Jusque la on a vu que la représentation de matrice, aussi appelé level plot.
on se contente de représenter l'info par une couleur.

L'étape d'après c'est de faire de la classification hiérarchique ascendante: on va voir quels sont les groupes qui
se ressemblent en faisant un arbre. La il y a plein d'algo stat différent pour faire l'arbre.
Une fois que l'arbre est fait, il faut choisir l'ordre des feuilles dans l'arbre pour que le heatmap soit joli.

C'est la fonction .clustermap de seaborn, on l'étudiera plus tard TODO






# ———————————————————————————————————
#  96 Application on the volcano dataset


# library
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Get the data (csv file is hosted on the web)
url = 'https://python-graph-gallery.com/wp-content/uploads/volcano.csv'
data = pd.read_csv(url)

# plot
sns.heatmap(data, cmap="viridis")

# axis and title
plt.tick_params(labelbottom='off', labelleft='off')
plt.xlabel('Latitude')
plt.ylabel('Longitude')
plt.title('Altitude on the volcano area', loc='left' )

plt.savefig('PNG/#96_Volcano_Heatmap.png')








  -----------------------------------------
 |											|
 |											|
 |  SERIE #100 -> #110  ABOUT SEABORN
 |											|
 |											|
  -----------------------------------------


import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd





# ———————————————————————————————————
#  #100 CALL ONE COLOR

What is different from Matplotlib?


=== 1/ CALL ONE COLOR ===

Je peux remettre juste un graph et les basiques et lier vers matplotlib








# ———————————————————————————————————
#  #101 MAKE A PALETTE

Read this:
http://seaborn.pydata.org/tutorial/color_palettes.html

Rcolorbrewer
viridis
hand palette



# 2.1 Sequential

# Libraries
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# create data
x = np.random.rand(80) - 0.5
y = x+np.random.rand(80)
z = x+np.random.rand(80)
df = pd.DataFrame({'x':x, 'y':y, 'z':z})

# R Color Brewer
#sns.lmplot( x='x', y='y', data=df, fit_reg=False, hue='x', legend=False, palette="Blues")
#plt.savefig('PNG/#101_seaborn_palette1.png', dpi=96)
sns.lmplot( x='x', y='y', data=df, fit_reg=False, hue='x', legend=False, palette="Blues_r")
plt.savefig('PNG/#101_seaborn_palette2.png', dpi=96)





# 2.2 Diverging

# Libraries
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# create data
x = np.random.rand(80) - 0.5
y = x+np.random.rand(80)
z = x+np.random.rand(80)
df = pd.DataFrame({'x':x, 'y':y, 'z':z})

# R Color Brewer
#sns.lmplot( x='x', y='y', data=df, fit_reg=False, hue='x', legend=False, palette="PuOr")
#plt.savefig('PNG/#101_seaborn_palette3.png', dpi=96)
sns.lmplot( x='x', y='y', data=df, fit_reg=False, hue='x', legend=False, palette="PuOr_r")
plt.savefig('PNG/#101_seaborn_palette4.png', dpi=96)


# TODO
# use the seaborn function?
# Make a diverging palette between two HUSL colors.
#mypalette = sns.diverging_palette(220, 20, sep=20, as_cmap=True)
#sns.palplot( mypalette )
#sns.set_palette(mypalette)
#sns.lmplot( x='x', y='y', data=df, fit_reg=False, hue='x', legend=False)
#plt.savefig('PNG/#101_seaborn_palette2.png', dpi=96)


# You can also use a matplotlib palette?






# 2.3 Discrete / Qualitative


# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')
 
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# --- Use the 'palette' argument of seaborn
sns.lmplot( x="sepal_length", y="sepal_width", data=df, fit_reg=False, hue='species', legend=False, palette="Set1")
# Move the legend to an empty part of the plot
plt.legend(loc='lower right')
plt.savefig('PNG/#101_seaborn_palette5.png', dpi=96)
#sns.plt.show()

# --- Use a handmade palette
flatui = ["#9b59b6", "#3498db", "orange"]
sns.set_palette(flatui)
sns.lmplot( x="sepal_length", y="sepal_width", data=df, fit_reg=False, hue='species', legend=False)
plt.savefig('PNG/#101_seaborn_palette6.png', dpi=96)





# TO ADD ONE DAY

*** DEFAULT
By default we have this palette, close to matplotlib but bit more pleasant
current_palette = sns.color_palette()
sns.palplot(current_palette)

*** 6 SEABORN PALETTES
There are 6 possible variation: deep, muted, pastel, bright, dark, and colorblind.
current_palette = sns.color_palette("pastel")
sns.palplot(current_palette)

If you need more than 6 colors, python will reuse past colors:
sns.palplot(sns.color_palette("dark", 15))
Thus it is a good option to use circular color space
sns.palplot(sns.color_palette("hls", 8))

#












# ———————————————————————————————————
#  #102 FACETING WITH SEABORN

import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd


*** Using the SUBPLOT function
# This is good if there is no direct link between each plot
# It is the matplotlib way to do it.

# librarie and data
import matplotlib.pyplot as plt
import seaborn as sns
data = sns.load_dataset('iris')
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# make a grid with 1 row and 3 columns?
plt.subplot(131)
sns.boxplot(data=data)
plt.subplot(132)
sns.violinplot(data=data)
plt.subplot(133)
sns.regplot(x=data["sepal_length"], y=data["sepal_width"])
plt.savefig('PNG/#101_Seaborn_subplot1.png', dpi=96)

# make a grid with 1 column and 3 rows?
plt.subplot(311)
sns.boxplot(data=data)
plt.subplot(312)
sns.violinplot(data=data)
plt.subplot(313)
sns.regplot(x=data["sepal_length"], y=data["sepal_width"])
plt.savefig('PNG/#101_Seaborn_subplot2.png', dpi=96)

# --> See more detail in the correspondant matplotlib section, since it works the same





*** Into a seaborn function

# See here for more information.

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Split by species
sns.lmplot( x="sepal_length", y="sepal_width", data=df, fit_reg=False, hue='species', col='species')
sns.plt.show()

sns.lmplot( x="sepal_length", y="sepal_width", data=df, fit_reg=False, hue='species', row='species')
sns.plt.show()

aspect=.4, x_jitter=.1
col_wrap=2, size=3

row="sex", col="time"




*** Using factor plot

# We could use factorplot as well
sns.factorplot(data=df, x="sepal_length", y="sepal_width", col="species")  
sns.plt.show()

kind="violin" /  kind="count
col="diet"
size=5, aspect=.8
col_wrap
palette="Set3"


*** Using Facet.grid
https://seaborn.pydata.org/generated/seaborn.FacetGrid.html







# ———————————————————————————
#  #103 CONTROL MARGINS WITH SEABORN








# ———————————————————————————————————
#  #104 SEABORN THEMES


# library
import seaborn as sns
import numpy as np

# Data
data = np.random.normal(size=(20, 6)) + np.arange(6) / 2

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Proposed themes: darkgrid, whitegrid, dark, white, and ticks

# To use a theme:
sns.set_style("whitegrid")
sns.boxplot(data=data)
plt.title("whitegrid")
plt.savefig('PNG/#104_seaborn_themes1.png', dpi=96)

sns.set_style("darkgrid")
sns.boxplot(data=data);
plt.title("darkgrid")
plt.savefig('PNG/#104_seaborn_themes2.png', dpi=96)

sns.set_style("white")
sns.boxplot(data=data);
plt.title("white")
plt.savefig('PNG/#104_seaborn_themes3.png', dpi=96)

sns.set_style("dark")
sns.boxplot(data=data);
plt.title("dark")
plt.savefig('PNG/#104_seaborn_themes4.png', dpi=96)

sns.set_style("ticks")
sns.boxplot(data=data);
plt.title("ticks")
plt.savefig('PNG/#104_seaborn_themes5.png', dpi=96)








# ———————————————————————————————————
#  #104 CUSTOM AXIS ON SEABORN


# library & dataset
import seaborn as sns
import matplotlib.pyplot as plt
df = sns.load_dataset('iris')
 
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# plot
sns.lmplot( x="sepal_length", y="sepal_width", data=df, fit_reg=False, hue='species', legend=False, palette="Set1")
plt.legend(loc='lower right')

# custom x title
plt.xlabel('title of the xlabel', fontweight='bold', color = 'orange', fontsize='17', horizontalalignment='center')
plt.despine()
--> all of what work for matplotlib works for seaborn !




# remove spine:
sns.despine()
plt.show()
sns.despine(offset=10, trim=True);

sns.axes_style() --> donne tout ce que je peux customiser sur les axes
sns.set_style("darkgrid", {"axes.facecolor": ".9"})
sinplot()









# ———————————————————————————————————
#  #105 CUSTOM LEGEND ON SEABORN
import seaborn as sns
import matplotlib.pyplot as plt
df = sns.load_dataset('iris')
 
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# plot
sns.lmplot( x="sepal_length", y="sepal_width", data=df, fit_reg=False, hue='species', legend=False, palette="Set1")
plt.legend(loc='lower right')

sns.lmplot( x="sepal_length", y="sepal_width", data=df, fit_reg=False, hue='species', legend=False, palette="Set1")
plt.legend(loc='lower right', ncol=3)










# ———————————————————————————————————
#  #106 TURN A MATPLOTLIB CHART TO SEABORN STYLE

# library &amp;amp;amp; dataset
from matplotlib import pyplot as plt
import pandas as pd
import numpy as np

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Create data
df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101), 'z': (np.random.randn(100)*15+range(1,101))*2 })
 
# plot
#plt.plot( 'x', 'y', data=df, marker='o', color='mediumvioletred')
#plt.savefig('PNG/#106_seaborn_style_on_plt1.png', dpi=96)

# Just load seaborn and the chart looks better:
import seaborn as sns
plt.plot( 'x', 'y', data=df, marker='o', color='mediumvioletred')
plt.savefig('PNG/#106_seaborn_style_on_plt2.png', dpi=96)












  -----------------------------------------
 |											|
 |											|
 |  SERIE #110 --> #120 SEABORN CORRELOGRAM
 |											|
 |											|
  -----------------------------------------



# Plot pairwise relationships in a dataset.

# pairplot(data, hue=None, hue_order=None, palette=None, vars=None, x_vars=None, y_vars=None, kind='scatter', diag_kind='hist', markers=None, size=2.5, aspect=1, dropna=True, plot_kws=None, diag_kws=None, grid_kws=None)


# ———————————————————————————————————
#  #110 Basic correlogram

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Basic correlogram
sns.pairplot(df)
#sns.plt.show()
plt.savefig('PNG/#110_Basic_Correlogram.png')






# ———————————————————————————————————
#  #111 Custom correlogram


*** CUSTOM SCATTERPLOT

# We can custom it trough plot_kws and kind. Kind can be scatter or reg

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# kind = scatter or reg
import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
sns.pairplot(df, kind="reg")
plt.savefig('PNG/#111_Correlogram_custom1.png')

import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
sns.pairplot(df, kind="scatter")
plt.savefig('PNG/#111_Correlogram_custom2.png')

# As for classic scatter plot, you can adapt markers following a discrete variable:
import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
sns.pairplot(df, kind="scatter", hue="species", markers=["o", "s", "D"], palette="Set2")
plt.savefig('PNG/#111_Correlogram_custom3.png')

# Finalley you can give other arguments in plot_kws.
import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
sns.pairplot(df, kind="scatter", hue="species", plot_kws=dict(s=80, edgecolor="white", linewidth=2.5))
plt.savefig('PNG/#111_Correlogram_custom4.png')




*** CUSTOM HISTOGRAM

# We can custom it trough diag_kws and diag_kind

# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# diag_kind = kde for density or hist for histogram
import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
sns.pairplot(df, diag_kind="kde")
plt.savefig('PNG/#111_Correlogram_custom5.png')

import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
sns.pairplot(df, diag_kind="hist")
plt.savefig('PNG/#111_Correlogram_custom6.png')

# You can custom it as a density plot or histogram so see the related section
import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
sns.pairplot(df, diag_kind="kde", diag_kws=dict(shade=True, bw=.05, vertical=False) )
plt.savefig('PNG/#111_Correlogram_custom7.png')









  -----------------------------------------
 |											|
 |											|
 | SERIE #120 -> #130  LINEPLOT MATPLOTLIB & SEABORN
 |											|
 |											|
  -----------------------------------------


# Let's use the plot function of matplotlib. It is very linked with scatterplot so do not
# hesitate to visit this function as well.

# There are 2 types of Lineplots:
  # - With 1 observation per xvalue -> Use Matplotlib
  # - With Several observations per xvalue -> Use seaborn
  

# ———————————————————————————————————
#  #120 BASIC LINEPLOT & INPUT DATA

# Line plot are made for cases when the x variable is ordered. Not like scatterplot. In this
# sense it is really close from time serie. 

# === By default if we give one variable only to the plot function, it understands that it follows a continuous x axis:
import matplotlib.pyplot as plt
import numpy as np
np.random.seed(0)
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
values=np.cumsum(np.random.randn(1000,1))
plt.plot(values)
plt.savefig('PNG/#120_Basic_lineplot1.png')
#plt.show()


# === Just load the seaborn library to have a nicer result
import matplotlib.pyplot as plt
import numpy as np
np.random.seed(0)
import seaborn as sns
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
values=np.cumsum(np.random.randn(1000,1))
plt.plot(values)
plt.savefig('PNG/#120_Basic_lineplot2.png')
#plt.show()


# === We can make a line plot from 2 columns of a data frame
# libraries and data
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
import pandas as pd
df=pd.DataFrame({'xvalues': range(1,101), 'yvalues': np.random.randn(100) })

# plot
plt.plot( 'xvalues', 'yvalues', data=df)
plt.show()
# --> no need to make a figure, it is the same.

# === But if your X axis is not ordered:
import matplotlib.pyplot as plt
import seaborn as sns
df = sns.load_dataset('iris')

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
plt.plot( 'sepal_width', 'sepal_length', data=df)
plt.savefig('PNG/#120_Basic_lineplot3.png')
#plt.show()







# ———————————————————————————————————
#  #121 LINEPLOT CUSTOMIZATION

# libraries and data
import matplotlib.pyplot as plt
import numpy as np
#import seaborn as sns
import pandas as pd
np.random.seed(0)
df=pd.DataFrame({'x': range(1,11), 'y': np.random.randn(10) })
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)


# Custom line color
plt.plot( 'x', 'y', data=df, color='skyblue')
plt.savefig('PNG/#121_Custom_line_plot1.png')
#plt.show()
# see the color page to see how to custom colors

# add alpha
plt.plot( 'x', 'y', data=df, color='skyblue',  alpha=0.3)
plt.savefig('PNG/#121_Custom_line_plot2.png')
#plt.show()
    
# custom line style
plt.plot( 'x', 'y', data=df, linestyle='dashed')
plt.savefig('PNG/#121_Custom_line_plot3.png')
plt.show()

# 4 styles are available
plt.plot( [1,1.1,1,1.1,1], linestyle='-' , linewidth=4)
plt.text(1.5, 1.3, "linestyle = '-' ", horizontalalignment='left', size='medium', color='C0', weight='semibold')
plt.plot( [2,2.1,2,2.1,2], linestyle='--' , linewidth=4 )
plt.text(1.5, 2.3, "linestyle = '--' ", horizontalalignment='left', size='medium', color='C1', weight='semibold')
plt.plot( [3,3.1,3,3.1,3], linestyle='-.' , linewidth=4 )
plt.text(1.5, 3.3, "linestyle = '-.' ", horizontalalignment='left', size='medium', color='C2', weight='semibold')
plt.plot( [4,4.1,4,4.1,4], linestyle=':' , linewidth=4 )
plt.text(1.5, 4.3, "linestyle = ':' ", horizontalalignment='left', size='medium', color='C3', weight='semibold')
#plt.xticks([])
plt.axis('off')
plt.savefig('PNG/#121_Custom_line_plot4.png')


# custom line width
plt.plot( 'x', 'y', data=df, linewidth=22)
plt.savefig('PNG/#121_Custom_line_plot5.png')
plt.show()







# ———————————————————————————————————
#  #122 MULTIPLE LINES

# libraries and data
import matplotlib.pyplot as plt
import numpy as np
#import seaborn as sns
import pandas as pd
df=pd.DataFrame({'x': range(1,11), 'y1': np.random.randn(10), 'y2': np.random.randn(10)+range(1,11), 'y3': np.random.randn(10)+range(11,21) })

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# multiple line plot
plt.plot( 'x', 'y1', data=df, marker='o', markerfacecolor='blue', markersize=12, color='skyblue', linewidth=4)
plt.plot( 'x', 'y2', data=df, marker='', color='olive', linewidth=2)
plt.plot( 'x', 'y3', data=df, marker='', color='olive', linewidth=2, linestyle='dashed', label="toto")
plt.legend()

plt.savefig('PNG/#122_Multiple_line_plot.png')


            

            
            

# ———————————————————————————————————
#  #123 Highlight a line

# libraries and data
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Make a data frame
df=pd.DataFrame({'x': range(1,11), 'y1': np.random.randn(10), 'y2': np.random.randn(10)+range(1,11), 'y3': np.random.randn(10)+range(11,21), 'y4': np.random.randn(10)+range(6,16), 'y5': np.random.randn(10)+range(4,14)+(0,0,0,0,0,0,0,-3,-8,-6), 'y6': np.random.randn(10)+range(2,12), 'y7': np.random.randn(10)+range(5,15), 'y8': np.random.randn(10)+range(4,14) })

#plt.style.use('fivethirtyeight')
plt.style.use('seaborn-darkgrid')
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# multiple line plot
for column in df.drop('x', axis=1):  
    plt.plot(df['x'], df[column], marker='', color='grey', linewidth=1, alpha=0.4)

# Now re do the interesting curve, but biger with distinct color
plt.plot(df['x'], df['y5'], marker='', color='orange', linewidth=4, alpha=0.7)

# Change xlim
plt.xlim(0,12)

# Let's annotate the plot
num=0
for i in df.values[9][1:]:
    num+=1
    name=list(df)[num]
    if name != 'y5':
        plt.text(10.2, i, name, horizontalalignment='left', size='small', color='grey')

# And add a special annotation for the group we are interested in
plt.text(10.2, df.y5.tail(1), 'Mr Orange', horizontalalignment='left', size='small', color='orange')
    
# Add titles
plt.title("Evolution of Mr Orange vs other students", loc='left', fontsize=12, fontweight=0, color='orange')
plt.xlabel("Time")
plt.ylabel("Score")

plt.savefig('PNG/#123_Highlight_a_line.png')



            
            
            
            
# ———————————————————————————————————
#  #124 Spaghetti Plot

# libraries and data
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Make a data frame
df=pd.DataFrame({'x': range(1,11), 'y1': np.random.randn(10), 'y2': np.random.randn(10)+range(1,11), 'y3': np.random.randn(10)+range(11,21), 'y4': np.random.randn(10)+range(6,16), 'y5': np.random.randn(10)+range(4,14)+(0,0,0,0,0,0,0,-3,-8,-6), 'y6': np.random.randn(10)+range(2,12), 'y7': np.random.randn(10)+range(5,15), 'y8': np.random.randn(10)+range(4,14), 'y9': np.random.randn(10)+range(4,14), 'y10': np.random.randn(10)+range(2,12) })

#plt.style.use('fivethirtyeight')
plt.style.use('seaborn-darkgrid')
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# create a color palette
palette = plt.get_cmap('Set1')

# multiple line plot
num=0
for column in df.drop('x', axis=1):  
    num+=1
    plt.plot(df['x'], df[column], marker='', color=palette(num), linewidth=1, alpha=0.9, label=column)

# Add legend
plt.legend(loc=2, ncol=2)

# Add titles
plt.title("A (bad) Spaghetti plot", loc='left', fontsize=12, fontweight=0, color='orange')
plt.xlabel("Time")
plt.ylabel("Score")

plt.savefig('PNG/#124_Spaghetti_plot.png')

            
            
            
            
            
            
            
# ———————————————————————————————————
#  #125 Line plot and small multiple

# libraries and data
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Make a data frame
df=pd.DataFrame({'x': range(1,11), 'y1': np.random.randn(10), 'y2': np.random.randn(10)+range(1,11), 'y3': np.random.randn(10)+range(11,21), 'y4': np.random.randn(10)+range(6,16), 'y5': np.random.randn(10)+range(4,14)+(0,0,0,0,0,0,0,-3,-8,-6), 'y6': np.random.randn(10)+range(2,12), 'y7': np.random.randn(10)+range(5,15), 'y8': np.random.randn(10)+range(4,14), 'y9': np.random.randn(10)+range(4,14) })


# Initialize the figure
plt.style.use('seaborn-darkgrid')
my_dpi=96
fig=plt.figure(figsize=(700/my_dpi, 700/my_dpi), dpi=my_dpi)

# create a color palette
palette = plt.get_cmap('Set1')

# multiple line plot
num=0
for column in df.drop('x', axis=1):  
    num+=1
    
    # Find the right spot on the plot
    plt.subplot(3,3, num)
    
    # Plot the lineplot
    plt.plot(df['x'], df[column], marker='', color=palette(num), linewidth=1.9, alpha=0.9, label=column)

    # Same limits for everybody!
    plt.xlim(0,10)
    plt.ylim(-2,22)
    
    # Not ticks everywhere
    if num in range(7) :
        plt.tick_params(labelbottom='off')   
    if num not in [1,4,7] :
        plt.tick_params(labelleft='off')   
    
    # Add title
    plt.title(column, loc='left', fontsize=12, fontweight=0, color=palette(num) )
             
# general title
plt.suptitle("How the 9 students improved\nthese past few days?", fontsize=13, fontweight=0, color='black', style='italic', y=1.02)

# Axis title
fig.text(0.5, 0.02, 'Time', ha='center', va='center')
fig.text(0.06, 0.5, 'Note', ha='center', va='center', rotation='vertical')


plt.savefig('PNG/#125_Lineplot_small_multiple.png', bbox_inches='tight')

            
# ANOTHER VERSION WITH THE OTHER GROUPS AS WELL

# libraries and data
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Make a data frame
df=pd.DataFrame({'x': range(1,11), 'y1': np.random.randn(10), 'y2': np.random.randn(10)+range(1,11), 'y3': np.random.randn(10)+range(11,21), 'y4': np.random.randn(10)+range(6,16), 'y5': np.random.randn(10)+range(4,14)+(0,0,0,0,0,0,0,-3,-8,-6), 'y6': np.random.randn(10)+range(2,12), 'y7': np.random.randn(10)+range(5,15), 'y8': np.random.randn(10)+range(4,14), 'y9': np.random.randn(10)+range(4,14) })

# Initialize the figure
plt.style.use('seaborn-darkgrid')
my_dpi=96
fig=plt.figure(figsize=(700/my_dpi, 700/my_dpi), dpi=my_dpi)

# create a color palette
palette = plt.get_cmap('Set1')

# multiple line plot
num=0
for column in df.drop('x', axis=1):  
    num+=1
    
    # Find the right spot on the plot
    plt.subplot(3,3, num)
    
    # plot every groups, but discreet
    for v in df.drop('x', axis=1):  
        plt.plot(df['x'], df[v], marker='', color='grey', linewidth=0.6, alpha=0.3)

    # Plot the lineplot
    plt.plot(df['x'], df[column], marker='', color=palette(num), linewidth=2.4, alpha=0.9, label=column)

    # Same limits for everybody!
    plt.xlim(0,10)
    plt.ylim(-2,22)
    
    # Not ticks everywhere
    if num in range(7) :
        plt.tick_params(labelbottom='off')   
    if num not in [1,4,7] :
        plt.tick_params(labelleft='off')   
    
    # Add title
    plt.title(column, loc='left', fontsize=12, fontweight=0, color=palette(num) )
             
# general title
plt.suptitle("How the 9 students improved\nthese past few days?", fontsize=13, fontweight=0, color='black', style='italic', y=1.02)

# Axis title
fig.text(0.5, 0.02, 'Time', ha='center', va='center')
fig.text(0.06, 0.5, 'Note', ha='center', va='center', rotation='vertical')


plt.savefig('PNG/#125_Lineplot_small_multiple_v2.png', bbox_inches='tight')

         
    

            
            
            
            
            
            
            
            
            
            
            
            
# ———————————————————————————————————
#  #124 Ts plot function of seaborn

# The Ts plot function is awesome if you have: the measurement of a numerical value through time several individuals.indeed it is done to plot uncertainty around
# a trend. So do not use it to plot a single line!
       
# It gives 2 parts on the chart: 
# - the central tendancy: dot or lines
# - the uncertainty representation: error bars or uncertainty area or unit traces

# libraries and data
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
import pandas as pd

# Create a wide format: one column per subject
df=pd.DataFrame({'x': range(1,11), 'y1': np.random.randn(10), 'y2': np.random.randn(10)+range(1,11), 'y3': np.random.randn(10)+range(11,21), 'y4': np.random.randn(10)+range(6,16), 'y5': np.random.randn(10)+range(4,14) })

# Make it long: only 3 columns
df=pd.melt(df, id_vars=['x'], value_vars=['y1', 'y2', 'y3', 'y4', 'y5'], var_name='subject')        

# Default Plot
sns.tsplot(time="x", value="value", unit="subject", data=df)

# Style available
sns.tsplot(time="x", value="value", unit="subject", data=df, err_style="ci_bars")
sns.tsplot(time="x", value="value", unit="subject", data=df, err_style="unit_traces")
sns.tsplot(time="x", value="value", unit="subject", data=df, err_style="boot_traces", n_boot=50)

# Custom the color
sns.tsplot(time="x", value="value", unit="subject", data=df, color="m")

# Interpolate?
sns.tsplot(time="x", value="value", unit="subject", data=df, interpolate=False )
sns.tsplot(time="x", value="value", unit="subject", data=df, err_style="ci_bars", interpolate=False )

# How to represent uncertainty: possibilities: ci_band, ci_bars, boot_traces, boot_kde, unit_traces, unit_points
sns.tsplot(time="x", value="value", unit="subject", data=df, err_style="unit_traces" , color="orange")
sns.tsplot(time="x", value="value", unit="subject", data=df, err_style="ci_band" , color="orange")
sns.tsplot(time="x", value="value", unit="subject", data=df, err_style="ci_bars" , color="orange")
sns.tsplot(time="x", value="value", unit="subject", data=df, err_style="boot_traces", n_boot=500, color="orange")
sns.tsplot(time="x", value="value", unit="subject", data=df, err_style="boot_kde" ,  n_boot=500, color="orange")

# How to calculate uncertainty? -> if you represent uncertainty using a method with confidence interval = ci_band or ci_bars
sns.tsplot(time="x", value="value", unit="subject", data=df, ci="sd", color="orange")
sns.tsplot(time="x", value="value", unit="subject", data=df, ci=[68, 95], color="orange")

# Central tendancy
sns.tsplot(time="x", value="value", unit="subject", data=df, estimator=np.median)
sns.tsplot(time="x", value="value", unit="subject", data=df, estimator=np.max)







# ———————————————————————————————————
#  #126 With several groups

# Disclaimer:
http://seaborn.pydata.org/generated/seaborn.tsplot.html

# libraries and data
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
import pandas as pd

# Load the gammas data set = long format
gammas = sns.load_dataset("gammas")

# plot
sns.tsplot(time="timepoint", value="BOLD signal", unit="subject", condition="ROI", data=gammas)










# ———————————————————————————————————
#  #127 REAL TIME SERIES: BYCICLES

# Libraries
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
import pandas as pd

# Import data 
# https://www.kaggle.com/c/bike-sharing-demand/data
df = pd.read_csv('http://python-graph-gallery.com/wp-content/uploads/bike.csv', sep=",", index_col=0, parse_dates=True)

# Create a column for the hour, and one for the day
df['weekday'] = df.index.weekday
df['hour'] = df.index.hour
df['year'] = df.index.year
df['date'] = df.index.date

# Represent in function of the hour of the day?
#sns.tsplot( time="hour", value="count", unit="weekday", data=df)


plt.plot(df['date'], df['count'])


fig, ax = plt.subplots(1)
ax.plot(df['date'], df['count'])

# rotate and align the tick labels so they look better
fig.autofmt_xdate()

# use a more precise date string for the x axis locations in the
# toolbar
import matplotlib.dates as mdates
ax.fmt_xdata = mdates.DateFormatter('%Y-%m-%d')
plt.title('fig.autofmt_xdate fixes the labels')





# Represent day of the year
df=df.rename(columns = {'count':'total_count'}) # since count is also a Dataframe func.
df.total_count = df.total_count.astype(np.float)
sns.tsplot( time="date", value="total_count", unit="hour", data=df)

df["date"]


df['hour'] = pd.to_datetime(df.datetime).day


df['Date'] = pd.to_datetime(df['Date'], errors = 'coerce')

type(df['datetime'])







df=pd.DataFrame({'x': range(1,11), 'y1': np.random.randn(10)})
           
sns.tsplot( data=df)            
sns.tsplot(time="x", value="y1", data=df)            
            
            
            
sns.tsplot(time="timepoint", value="BOLD signal", unit="subject", condition="ROI", data=gammas)

       
            
import numpy as np; np.random.seed(22)
import seaborn as sns; sns.set(color_codes=True)
x = np.linspace(0, 15, 31)
data = np.sin(x) + np.random.rand(10, 31) + np.random.randn(10, 1)


ax = sns.tsplot(data=data)


gammas = sns.load_dataset("gammas")
gammas
ax = sns.tsplot(time="timepoint", value="BOLD signal", unit="subject", condition="ROI", data=gammas)








# ———————————————————————————————————
#  #128 SHOW DATE ON XLAB

import datetime
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import matplotlib.dates as mdates

# build up the data
df = []
start_date = datetime.datetime(2015, 7, 1)
for i in range(10):
    for j in [1,2]:
        unit = 'Ones' if j == 1 else 'Twos'
        date = start_date + datetime.timedelta(days=i)

        # I believe it makes more sense to directly convert the datetime to a
        # "matplotlib"-date (float), instead of creating strings and then let
        # pandas parse the string again
        df.append({
                'Date': mdates.date2num(date),
                'Value': i * j,
                'Unit': unit
            })
df = pd.DataFrame(df)

# build the figure
fig, ax = plt.subplots()
sns.tsplot(df, time='Date', value='Value', unit='Unit', ax=ax)

# assign locator and formatter for the xaxis ticks.
ax.xaxis.set_major_locator(mdates.AutoDateLocator())
ax.xaxis.set_major_formatter(mdates.DateFormatter('%Y.%m.%d'))

# put the labels at 45deg since they tend to be too long
fig.autofmt_xdate()
plt.show()

------ OR ---------

import seaborn as sns
import pandas as pd
sns.set(style="darkgrid")

gammas = sns.load_dataset("gammas")
gammas['time'] = pd.to_datetime('2000-01-01') + pd.to_timedelta(10, unit='D') * gammas['timepoint']
sns.tsplot(gammas, "time", "subject", "ROI", "BOLD signal")




  -----------------------------------------
 |												|
 |												|
 | SERIE #130 -> #140  SCATTERPLOT MATPLOTLIB
 |						AND CONNECTED SCATTER	|
 |												|
  -----------------------------------------



# ———————————————————————————————————
#  #130 BASIC SCATTERPLOT

# libraries and data
import matplotlib.pyplot as plt
import numpy as np
#import seaborn as sns
import pandas as pd
df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101) })

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)


# plot
plt.plot( 'x', 'y', data=df, linestyle='none', marker='o')
plt.savefig('PNG/#130_Basic_Matplotlib_Scatterplot.png')
plt.show()








# ———————————————————————————————————
#  #131 CUSTOM SCATTERPLOT APPEARANCE


# libraries and data
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
import pandas as pd
df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*80+range(1,101) })
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# change marker shape:
plt.plot( 'x', 'y', data=df, linestyle='none', marker='*')
plt.savefig('PNG/#131_Custom_Matplotlib_Scatterplot1.png')
plt.show()

# All possibilities
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# get all markers possibilities
all_poss=['.','o','v','^','>','<','s','p','*','h','H','D','d','1','','']

# to see all possibilities:
# from matplotlib import markers
# all_poss=markers.MarkerStyle.markers.keys()

# set the limit of x and y axis:
plt.xlim(0.5,4.5)
plt.ylim(0.5,4.5)

# remove ticks and values of axis:
plt.xticks([])
plt.yticks([])
#plt.set_xlabel(size=0)

# Make a loop to add markers one by one
num=0
for x in range(1,5):
	for y in range(1,5):
		num += 1
		plt.plot(x,y,marker=all_poss[num-1], markerfacecolor='orange', markersize=23, markeredgecolor="black")
		plt.text(x+0.2, y, all_poss[num-1], horizontalalignment='left', size='medium', color='black', weight='semibold')
plt.savefig('PNG/#131_Custom_Matplotlib_Scatterplot2.png')

# change marker size:
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*80+range(1,101) })
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
plt.plot( 'x', 'y', data=df, linestyle='none', marker='D', markersize=16)
plt.savefig('PNG/#131_Custom_Matplotlib_Scatterplot3.png')
plt.show()

# change marker color:
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
df=pd.DataFrame({'x': range(1,10), 'y': np.random.randn(9)*80+range(1,10) })
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
plt.plot( 'x', 'y', data=df, linestyle='none', markerfacecolor='skyblue', marker="o", markeredgecolor="black", markersize=16)
plt.savefig('PNG/#131_Custom_Matplotlib_Scatterplot4.png')
plt.show()
--> link color python
--> link map a color to a variable

# Custom edges of markers:
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
df=pd.DataFrame({'x': range(1,10), 'y': np.random.randn(9)*80+range(1,10) })
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
plt.plot( 'x', 'y', data=df, linestyle='none', marker='D', markersize=16, markeredgecolor="orange", markeredgewidth=5)
plt.savefig('PNG/#131_Custom_Matplotlib_Scatterplot5.png')
plt.show()








# ———————————————————————————————————
#  #132 CONNECTED SCATTERPLOT

# En fait c'es trés proche de scatter plot et de line plot.
# libraries and data
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
import pandas as pd
df=pd.DataFrame({'x': range(1,10), 'y': np.random.randn(9)*80+range(1,10) })

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# plot
plt.plot( 'x', 'y', data=df, linestyle='-', marker='o')
plt.savefig('PNG/#132_Matplotlib connected scatterplot.png')

plt.show()





# COLOR DEPENDS THIRD VARIABLE
matplotlib.pyplot.scatter
https://stackoverflow.com/questions/7881994/matplotlib-how-to-change-data-points-color-based-on-some-variable

import matplotlib as mpl
t = np.linspace(0, 2 * np.pi, 20)
x = np.sin(t)
y = np.cos(t)
z=x
cmap, norm = mpl.colors.from_levels_and_colors([0, 2, 5, 6], ['red', 'green', 'blue']) 
f, ax = plt.subplots()
ax.scatter(x, y, c=z, cmap=cmap, norm=norm)





# -------------
https://stackoverflow.com/questions/5147112/matplotlib-how-to-put-individual-tags-for-a-scatter-plot

 !!! TODO !!!! 

 SCATTER WITH annotation
import numpy as np
import matplotlib.pyplot as plt

N = 10
data = np.random.random((N, 4))
labels = ['point{0}'.format(i) for i in range(N)]

plt.subplots_adjust(bottom = 0.1)
plt.scatter(
    data[:, 0], data[:, 1], marker='o', c=data[:, 2], s=data[:, 3] * 1500,
    cmap=plt.get_cmap('Spectral'))

for label, x, y in zip(labels, data[:, 0], data[:, 1]):
    plt.annotate(
        label,
        xy=(x, y), xytext=(-20, 20),
        textcoords='offset points', ha='right', va='bottom',
        bbox=dict(boxstyle='round,pad=0.5', fc='yellow', alpha=0.5),
        arrowprops=dict(arrowstyle = '->', connectionstyle='arc3,rad=0'))

plt.show()








# ———————————————————————————————————
#  #134 BAD GRAPH: OVERPLOTTING

# Overplotting=one of the most dangerous mistake in scatterplot.
# Example:

# libraries and data
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
import pandas as pd
plt.style.use('seaborn')

# Dataset:
df=pd.DataFrame({'x': np.random.normal(10, 1.2, 20000), 'y': np.random.normal(10, 1.2, 20000), 'group': np.repeat('A',20000) })
tmp1=pd.DataFrame({'x': np.random.normal(14.5, 1.2, 20000), 'y': np.random.normal(14.5, 1.2, 20000), 'group': np.repeat('B',20000) })
tmp2=pd.DataFrame({'x': np.random.normal(9.5, 1.5, 20000), 'y': np.random.normal(15.5, 1.5, 20000), 'group': np.repeat('C',20000) })
df=df.append(tmp1).append(tmp2)

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# plot
plt.plot( 'x', 'y', data=df, linestyle='', marker='o')
plt.xlabel('Value of X')
plt.ylabel('Value of Y')
plt.title('Overplotting looks like that:', loc='left')
plt.savefig('PNG/#134_Fighting_overplotting1.png', dpi=96, bbox_inches='tight')

# How to fight it?
# Be carefull outliers are harder to see

# 1- Reduce dot size
plt.plot( 'x', 'y', data=df, linestyle='', marker='o', markersize=0.7)
plt.xlabel('Value of X')
plt.ylabel('Value of Y')
plt.title('Overplotting? Try to reduce the dot size', loc='left')
plt.savefig('PNG/#134_Fighting_overplotting2.png', dpi=96, bbox_inches='tight')

# 2- Use transparency
# Be carefull if you use several color on your chart: they can become hard to distinguish
plt.plot( 'x', 'y', data=df, linestyle='', marker='o', markersize=3, alpha=0.05, color="purple")
plt.xlabel('Value of X')
plt.ylabel('Value of Y')
plt.title('Overplotting? Try to use transparency', loc='left')
plt.savefig('PNG/#134_Fighting_overplotting3.png', dpi=96, bbox_inches='tight')

# 3- 2D density graph
sns.kdeplot(df.x, df.y, cmap="Reds", shade=True)
plt.title('Overplotting? Try 2D density graph', loc='left')
plt.savefig('PNG/#134_Fighting_overplotting4.png', dpi=96, bbox_inches='tight')

# 4- Sampling:
# Pandas has an awesome function for that!
df_sample=df.sample(1000)
plt.plot( 'x', 'y', data=df_sample, linestyle='', marker='o')
plt.xlabel('Value of X')
plt.ylabel('Value of Y')
plt.title('Overplotting? Sample your data', loc='left')
plt.savefig('PNG/#134_Fighting_overplotting5.png', dpi=96, bbox_inches='tight')

# 5- Filtering
df_filtered = df[ df['group'] == 'A']
plt.plot( 'x', 'y', data=df, linestyle='', marker='o', markersize=1.5, color="grey", alpha=0.3, label='other group')
plt.plot( 'x', 'y', data=df_filtered, linestyle='', marker='o', markersize=1.5, alpha=0.3, label='group A')
plt.legend(markerscale=8)
plt.xlabel('Value of X')
plt.ylabel('Value of Y')
plt.title('Overplotting? Show a specific group', loc='left')
plt.savefig('PNG/#134_Fighting_overplotting6.png', dpi=96, bbox_inches='tight')

# 6- Grouping
sns.lmplot( x="x", y="y", data=df, fit_reg=False, hue='group', legend=False, palette="Accent", scatter_kws={"alpha":0.1,"s":15} )
plt.legend(loc='lower right', markerscale=2)
plt.xlabel('Value of X')
plt.ylabel('Value of Y')
plt.title('Overplotting? Show putative structure', loc='left')
plt.savefig('PNG/#134_Fighting_overplotting7.png', dpi=96, bbox_inches='tight')

# 7- Faceting
g = sns.FacetGrid(df, col="group", hue="group")
g = (g.map(plt.scatter, "x", "y", edgecolor="w"))
plt.savefig('PNG/#134_Fighting_overplotting8.png', dpi=96, bbox_inches='tight')
          

# 8- Jitter

# Dataset:
a=np.concatenate([np.random.normal(2, 4, 1000), np.random.normal(4, 4, 1000), np.random.normal(1, 2, 500), np.random.normal(10, 2, 500), np.random.normal(8, 4, 1000), np.random.normal(10, 4, 1000)])
df=pd.DataFrame({'x': np.repeat( range(1,6), 1000), 'y': a })

# plot
plt.plot( 'x', 'y', data=df, linestyle='', marker='o')
plt.savefig('PNG/#134_Fighting_overplotting11.png', dpi=96, bbox_inches='tight')

# Correct
sns.stripplot(df.x, df.y, jitter=0.2, size=2)
plt.title('Overplotting? Use jitter when x data are not really continuous', loc='left')
plt.savefig('PNG/#134_Fighting_overplotting12.png', dpi=96, bbox_inches='tight')

# 9- 3D plot

# libraries
from scipy.stats import kde
from mpl_toolkits.mplot3d import Axes3D

# Evaluate a gaussian kde on a regular grid of nbins x nbins over data extents
nbins=300
k = kde.gaussian_kde([df.x,df.y])
xi, yi = np.mgrid[ df.x.min():df.x.max():nbins*1j,  df.y.min():df.y.max():nbins*1j]
zi = k(np.vstack([xi.flatten(), yi.flatten()]))
 
# Transform it in a dataframe
data=pd.DataFrame({'x': xi.flatten(), 'y': yi.flatten(), 'z': zi  })


# Make the plot
fig = plt.figure()
ax = fig.gca(projection='3d')
ax.plot_trisurf(data.x, data.y, data.z, cmap=plt.cm.Spectral, linewidth=0.2)
# Adapt angle, first number is up/down, second number is right/left
ax.view_init(30, 80)   
plt.savefig('PNG/#134_Fighting_overplotting9.png', dpi=96, bbox_inches='tight')


# 10- Bonus: show marginal distribution
sns.jointplot(x=df.x, y=df.y, kind='kde')
plt.savefig('PNG/#134_Fighting_overplotting10.png', dpi=96, bbox_inches='tight')


# Litterature:
- https://shapescience.xyz/blog/reducing-overplotting-in-scatterplots/








  -----------------------------------------
 |												|
 |												|
 | SERIE #140 -> #150  PIEPLOTS
 |												|
 |												|
  -----------------------------------------





# ———————————————————————————————————
#  #140 Basic pieplot with panda


# library
import pandas as pd

# --- dataset 1: just 4 values for 4 groups:
df = pd.DataFrame([8,8,1,2], index=['a', 'b', 'c', 'd'], columns=['x'])

# make the plot
import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
df.plot(kind='pie', subplots=True, figsize=(8, 8))
plt.savefig('PNG/#140_basic_pieplot1.png')


# --- dataset 2: 3 columns and rownames
df = pd.DataFrame({'var1':[8,3,4,2], 'var2':[1,3,4,1]}, index=['a', 'b', 'c', 'd'] )
df.plot(kind='pie', subplots=True, figsize=(16,8))
plt.savefig('PNG/#140_basic_pieplot2.png')



# ———————————————————————————————————
#  #140 Basic pieplot with matplotlib
!!! TO ADD !!!

# library
import matplotlib.pyplot as plt

# create data
names='groupA', 'groupB', 'groupC', 'groupD',
size=[12,11,3,30]

# Create a pieplot
plt.pie(size)
plt.show()






  -----------------------------------------
 |												|
 |												|
 | SERIE #150 -> #160  PARALLEL PLOT
 |												|
 |												|
  -----------------------------------------



# ———————————————————————————————————
#  #150 Parrallele plot with pandas

# libraries
import pandas
import matplotlib.pyplot as plt
from pandas.tools.plotting import parallel_coordinates

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Take the iris dataset 
import seaborn as sns
data = sns.load_dataset('iris')

# Make the plot
parallel_coordinates(data, 'species', colormap=plt.get_cmap("Set2"))
plt.savefig('PNG/#150_Parrallele_plot_with_pandas.png')
plt.show()






# ———————————————————————————————————
#  With matplotlib

PARRALELE PLOT
from math import pi
import matplotlib.pyplot as plt

# Set data
cat = ['Speed', 'Reliability', 'Comfort', 'Safety', 'Effieciency']
values = [90, 60, 65, 70, 40]

# number of variable
N = len(cat)

x_as = [n / float(N) * 2 * pi for n in range(N)]

# Create polar plot
ax = plt.subplot(111)

# Draw the radial axes at the right positions + remove labels yet
plt.xticks(x_as)

# Plot data
ax.plot(x_as, values, linewidth=1, linestyle='solid', zorder=3)





  -----------------------------------------
 |												|
 |												|
 | SERIE #160 -> #170  DONUT CHART
 |												|
 |												|
  -----------------------------------------



# ———————————————————————————————————
#  #160 Basic Donut plot with matplotlib

# library
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# create data
size_of_groups=[12,11,3,30]

# Create a pieplot
plt.pie(size_of_groups)
#plt.show()

# add a circle at the center
my_circle=plt.Circle( (0,0), 0.7, color='white')
p=plt.gcf()
p.gca().add_artist(my_circle)

plt.savefig('PNG/#160_Basic_donut_plot.png')

plt.show()







# ———————————————————————————————————
#  #161 Custom Matplotlib donut plot

# library
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# create data
names='groupA', 'groupB', 'groupC', 'groupD',
size=[12,11,3,30]

# Create a circle for the center of the plot
my_circle=plt.Circle( (0,0), 0.7, color='white')

# ====== Custom colors

# Give color names
plt.pie(size, labels=names, colors=['red','green','blue','skyblue'])
p=plt.gcf()
p.gca().add_artist(my_circle)
plt.savefig('PNG/#161_custom_donut_plot1.png')
plt.show()

# Custom colors --> colors will cycle
plt.pie(size, labels=names, colors=['red','green'])
p=plt.gcf()
p.gca().add_artist(my_circle)
plt.savefig('PNG/#161_custom_donut_plot2.png')
plt.show()

# Use a color palette.
# Here I propose to use the Palettable utility which allows to load several palettes.
# the documentation is here https://jiffyclub.github.io/palettable/
# you can install it like that: 
# let's use it
# Use a known palette!
from palettable.colorbrewer.qualitative import Pastel1_7
plt.pie(size, labels=names, colors=Pastel1_7.hex_colors)
p=plt.gcf()
p.gca().add_artist(my_circle)
plt.savefig('PNG/#161_custom_donut_plot3.png')
plt.show()


# ======= Labels

# Label distance:  gives the space between labels and the center of the pie
plt.pie(size, labels=names, labeldistance=0.45)
p=plt.gcf()
p.gca().add_artist(my_circle)
plt.savefig('PNG/#161_custom_donut_plot4.png')
plt.show()

# Label color
plt.rcParams['text.color'] = 'red'
plt.pie(size, labels=names)
p=plt.gcf()
p.gca().add_artist(my_circle)
plt.savefig('PNG/#161_custom_donut_plot5.png')
plt.show()




# Donut plot with shadow: don't even think about that

# Custom wedges
plt.pie(size, labels=names, wedgeprops = { 'linewidth' : 7, 'edgecolor' : 'white' })
p=plt.gcf()
p.gca().add_artist(my_circle)
plt.savefig('PNG/#161_custom_donut_plot6.png')
plt.show()







# ———————————————————————————————————
#  #162 Change donut background color

# library
import matplotlib.pyplot as plt

# Data
names='groupA', 'groupB', 'groupC', 'groupD',
size=[12,11,3,30]

fig = plt.figure()
fig.patch.set_facecolor('black')

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Change color of text
plt.rcParams['text.color'] = 'white'

# Create a circle for the center of the plot
my_circle=plt.Circle( (0,0), 0.7, color='black')

# Pieplot
plt.pie(size, labels=names)
p=plt.gcf()
p.gca().add_artist(my_circle)
plt.savefig('PNG/#162_Background_color_donut.png', facecolor=fig.get_facecolor() )

# Turn label white
plt.show()






# ———————————————————————————————————
#  #163 Double donut chart

# Libraries
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)


# Make data: I have 3 groups and 7 subgroups
group_names=['groupA', 'groupB', 'groupC']
group_size=[12,11,30]
subgroup_names=['A.1', 'A.2', 'A.3', 'B.1', 'B.2', 'C.1', 'C.2', 'C.3', 'C.4', 'C.5']
subgroup_size=[4,3,5,6,5,10,5,5,4,6]

# Create colors
a, b, c=[plt.cm.Blues, plt.cm.Reds, plt.cm.Greens]

# First Ring (outside)
fig, ax = plt.subplots()
ax.axis('equal')
mypie, _ = ax.pie(group_size, radius=1.3, labels=group_names, colors=[a(0.6), b(0.6), c(0.6)] )
plt.setp( mypie, width=0.3, edgecolor='white')

# Second Ring (Inside)
mypie2, _ = ax.pie(subgroup_size, radius=1.3-0.3, labels=subgroup_names, labeldistance=0.7, colors=[a(0.5), a(0.4), a(0.3), b(0.5), b(0.4), c(0.6), c(0.5), c(0.4), c(0.3), c(0.2)])
plt.setp( mypie2, width=0.4, edgecolor='white')
plt.margins(0,0)
plt.savefig('PNG/#163_Double_Donut_Chart.png', facecolor=fig.get_facecolor() )

plt.show()











  -----------------------------------------
 |												|
 |												|
 | SERIE #170 -> #180  VENN DIAGRAM
 |												|
 |												|
  -----------------------------------------
  
The library matplotlib-venn allows to make venn diagram with python. Once more it is build on top
of Matplotlib. You can install it doing 'easy_install matplotlib-venn'. It works if you have
2 or 3 groups.


# ———————————————————————————————————
#  #170 Basic Venn diagrams with 2 groups

# Import the library
import matplotlib.pyplot as plt
from matplotlib_venn import venn2

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)


venn2(subsets = (10, 5, 2), set_labels = ('Group A', 'Group B'))

plt.savefig('PNG/#170_Basic_Venn_Diagram.png')

plt.show()

# Other format:
venn2([set(['A', 'B', 'C', 'D']), set(['D', 'E', 'F'])])
plt.savefig('PNG/#170_Basic_Venn_Diagram2.png')
plt.show()




# ———————————————————————————————————
#  #171 Basic Venn diagrams with 3 groups

# Import the library
import matplotlib.pyplot as plt
from matplotlib_venn import venn3

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

venn3(subsets = (10, 8, 22, 6,9,4,2))

plt.savefig('PNG/#171_Basic_Venn_3 groups.png')

plt.show()




# ———————————————————————————————————
#  #172 Custom venn diagram

# Import the library
import matplotlib.pyplot as plt
from matplotlib_venn import venn3

# plt.show()

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Custom text labels
v=venn3(subsets = (10, 8, 22, 6,9,4,2), set_labels = ('Group A', 'Group B', 'Group C'))
v.get_label_by_id('A').set_text('Favourite group!')
plt.savefig('PNG/#172_custom_venn_diagram1.png')
plt.show()

# Line style
# 'dashed', 'dotted',
import matplotlib.pyplot as plt
from matplotlib_venn import venn3
from matplotlib_venn import venn3_circles
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
v=venn3(subsets = (10, 8, 22, 6,9,4,2), set_labels = ('Group A', 'Group B', 'Group C'))
c=venn3_circles(subsets = (10, 8, 22, 6,9,4,2), linestyle='dashed', linewidth=1, color="grey")
plt.savefig('PNG/#172_custom_venn_diagram2.png')
plt.show()


# Change one group only
import matplotlib.pyplot as plt
from matplotlib_venn import venn3
from matplotlib_venn import venn3_circles
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
v=venn3(subsets = (10, 8, 22, 6,9,4,2), set_labels = ('Group A', 'Group B', 'Group C'))
c=venn3_circles(subsets = (10, 8, 22, 6,9,4,2), linestyle='dashed', linewidth=1, color="grey")
c[0].set_lw(8.0)
c[0].set_ls('dotted')
c[0].set_color('skyblue')
plt.savefig('PNG/#172_custom_venn_diagram3.png')
plt.show()

# Color

v.get_patch_by_id('100').set_alpha(1.0)
v.get_patch_by_id('100').set_color('white')
plt.show()





# ———————————————————————————————————
#  #173 Elaborated example
# From the doc of the library
#https://pypi.python.org/pypi/matplotlib-venn

# libraries
from matplotlib import pyplot as plt
import numpy as np
from matplotlib_venn import venn3, venn3_circles

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Make a Basic Venn
v = venn3(subsets=(1, 1, 1, 1, 1, 1, 1), set_labels = ('A', 'B', 'C'))

# Custom it
v.get_patch_by_id('100').set_alpha(1.0)
v.get_patch_by_id('100').set_color('white')
v.get_label_by_id('100').set_text('Unknown')
v.get_label_by_id('A').set_text('Set "A"')
c = venn3_circles(subsets=(1, 1, 1, 1, 1, 1, 1), linestyle='dashed')
c[0].set_lw(1.0)
c[0].set_ls('dotted')

# Add title and annotation
plt.title("Sample Venn diagram")
plt.annotate('Unknown set', xy=v.get_label_by_id('100').get_position() - np.array([0, 0.05]), xytext=(-70,-70),
             ha='center', textcoords='offset points', bbox=dict(boxstyle='round,pad=0.5', fc='gray', alpha=0.1),
             arrowprops=dict(arrowstyle='->', connectionstyle='arc3,rad=0.5',color='gray'))
plt.savefig('PNG/#173_elaborated_Venn_diagram.png')
# Show it
plt.show()



# ———————————————————————————————————
#  #174 Change Background color

from matplotlib import pyplot as plt
from matplotlib_venn import venn2
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
v = venn2( (10, 20, 10), alpha = 1 )
plt.gca().set_axis_bgcolor('skyblue')
plt.gca().set_axis_on()
plt.savefig('PNG/#174_Change_Background_color_venn.png')
plt.show()




# ———————————————————————————————————
#  #175 more customization
# TODO

from matplotlib import pyplot as plt
from matplotlib_venn import venn3
v = venn3([set([1,2,4]), set([2,3,4]), set([1,3,4])])
central_label = v.get_label_by_id('111')
central_label.set_visible(False)
plt.gca().add_patch(plt.patches.Circle(central_label.get_position(), 0.1))
plt.show()


http://fouryears.eu/2012/10/13/venn-diagrams-in-python/






  -----------------------------------------
 |												|
 |												|
 | SERIE #180 -> #190  LOLIPOP PLOT
 |												|
 |												|
  -----------------------------------------

import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd

#stem(x, y, linefmt='b-', markerfmt='bo', basefmt='r-')


# ———————————————————————————————————
#  #180 basic lolipop plot

# library
import matplotlib.pyplot as plt
import numpy as np

# create data
x=range(1,41)
values=np.random.uniform(size=40)

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Create a pieplot
plt.stem(x, values)
plt.ylim(0, 1.2)
plt.savefig('PNG/#180_Basic_lolipop_plot.png', dpi=96)
#plt.show()
plt.gca()

# If no X provided, a sequence of numbers is provided
plt.stem(values)
#plt.show()
plt.gca()
# --> same figure

# Another way to call stemplot
(markerline, stemlines, baseline) = plt.stem(x, values)
plt.setp(baseline, visible=False)
#plt.show()
plt.gca()


# Note that the X axis can be categorical. In this case, it is often advised to reorder values and make the plot vertical:

# Create a dataframe
import pandas as pd
df = pd.DataFrame({'group':map(chr, range(65, 85)), 'values':np.random.uniform(size=20) })

# Reorder it following the values:
ordered_df = df.sort_values(by='values')
my_range=range(1,len(df.index)+1)

# Make the plot
plt.stem(ordered_df['values'])
plt.xticks( my_range, ordered_df['group'])
plt.savefig('PNG/#180_Basic_lolipop_plot2.png', dpi=96)
plt.gca()

# I personnaly prefer having a vertical version, but this is not possible through
# the stem function. We thus have to use the hline function instead:
plt.hlines(y=my_range, xmin=0, xmax=ordered_df['values'], color='skyblue')
plt.plot(ordered_df['values'], my_range, "D")
plt.yticks(my_range, ordered_df['group'])
plt.savefig('PNG/#180_Basic_lolipop_plot3.png', dpi=96)
plt.gca()

        
# Note that I always advise to use the seaborn style
# See next page for more details
import seaborn as sns
plt.hlines(y=my_range, xmin=0, xmax=ordered_df['values'], color='skyblue')
plt.plot(ordered_df['values'], my_range, "D")
plt.yticks(my_range, ordered_df['group'])
plt.savefig('PNG/#180_Basic_lolipop_plot4.png', dpi=96)
plt.gca()








# ———————————————————————————————————
#  181 Custom lolipop plot

A lolipop plot = vertical lines + markers + baseline. You can custom each component:
If you want to customize the default lolipop plot, it is better to call it like that.

*** Customize markers

# library
import matplotlib.pyplot as plt
import numpy as np

# create data
import numpy as np
values=np.random.uniform(size=40)

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# plot with no marker
plt.stem(values, markerfmt=' ')
plt.savefig('PNG/#181_custom_lolliplot_1.png', dpi=96)
#plt.show()
plt.gca()

# MARKER: change color and shape and size and edges
(markers, stemlines, baseline) = plt.stem(values)
plt.setp(markers, marker='D', markersize=10, markeredgecolor="orange", markeredgewidth=2)
plt.savefig('PNG/#181_custom_lolliplot_2.png', dpi=96)
#plt.show()
plt.gca()
# see the related page to learn more


*** Customize baseline

# create data
values=np.random.uniform(size=100)

# position is customized with the bottom argument
plt.stem(values, markerfmt=' ', bottom=0.5)
plt.savefig('PNG/#181_custom_lolliplot_3.png', dpi=96)
#plt.show()
plt.gca()

# hide it
(markers, stemlines, baseline) = plt.stem(values)
plt.setp(baseline, visible=False)
plt.savefig('PNG/#181_custom_lolliplot_4.png', dpi=96)
plt.gca()

# note that this works as well
plt.stem(values, basefmt=" ")
plt.gca()

# custom it
(markers, stemlines, baseline) = plt.stem(values)
plt.setp(baseline, linestyle="-", color="grey", linewidth=6)
plt.savefig('PNG/#181_custom_lolliplot_5.png', dpi=96)
#plt.show()
plt.gca()



*** Customize vertical lines

# cistpm ot it
(markers, stemlines, baseline) = plt.stem(values)
plt.setp(stemlines, linestyle="-", color="olive", linewidth=0.5 )
plt.savefig('PNG/#181_custom_lolliplot_6.png', dpi=96)







# ———————————————————————————————————
# 182 Vertical lolipop plot

# libraries
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Create a dataframe
df = pd.DataFrame({'group':map(chr, range(65, 85)), 'values':np.random.uniform(size=20) })

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Reorder it following the values:
ordered_df = df.sort_values(by='values')
my_range=range(1,len(df.index)+1)
        
# The vertival plot is made using the hline function
# I load the seaborn library only to benefit the nice looking feature
import seaborn as sns
plt.hlines(y=my_range, xmin=0, xmax=ordered_df['values'], color='skyblue')
plt.plot(ordered_df['values'], my_range, "o")
plt.yticks(my_range, ordered_df['group'])
plt.title("A vertical lolipop plot", loc='left')
plt.xlabel('Value of the variable')
plt.ylabel('Group')
plt.savefig('PNG/#182_vertical_lolipop_plot.png', dpi=96)
plt.gca()







# ———————————————————————————————————
# 183 Lolipop plot : Highlight a group

# libraries
import pandas as pd
import matplotlib.pyplot as plt

# Create a dataframe
df = pd.DataFrame({'group':map(chr, range(65, 85)), 'values':np.random.uniform(size=20) })

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Reorder it following the values:
ordered_df = df.sort_values(by='values')
my_range=range(1,len(df.index)+1)

# Create a color if the group is "B"
my_color=np.where(ordered_df ['group']=='B', 'orange', 'skyblue')
my_size=np.where(ordered_df ['group']=='B', 70, 30)

# The vertival plot is made using the hline function
# I load the seaborn library only to benefit the nice looking feature
import seaborn as sns
plt.hlines(y=my_range, xmin=0, xmax=ordered_df['values'], color=my_color, alpha=0.4)
plt.scatter(ordered_df['values'], my_range, color=my_color, s=my_size, alpha=1)
plt.yticks(my_range, ordered_df['group'])
plt.title("What about the B group?", loc='left')
plt.xlabel('Value of the variable')
plt.ylabel('Group')
plt.savefig('PNG/#183_highlight_a_group_in_lolipop_plot.png', dpi=96)
plt.gca()

 
 
 
 
# ———————————————————————————————————
# 184 Lolipop plot with 2 groups


# libraries
import pandas as pd
import matplotlib.pyplot as plt

# Create a dataframe
value1=np.random.uniform(size=20)
value2=value1+np.random.uniform(size=20)/4
df = pd.DataFrame({'group':map(chr, range(65, 85)), 'value1':value1 , 'value2':value2 })
df
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Reorder it following the values of the first value:
ordered_df = df.sort_values(by='value1')
my_range=range(1,len(df.index)+1)

# The vertival plot is made using the hline function
# I load the seaborn library only to benefit the nice looking feature
import seaborn as sns
plt.hlines(y=my_range, xmin=ordered_df['value1'], xmax=ordered_df['value2'], color='grey', alpha=0.4)
plt.scatter(ordered_df['value1'], my_range, color='skyblue', alpha=1, label='value1')
plt.scatter(ordered_df['value2'], my_range, color='green', alpha=0.4 , label='value2')
plt.legend()
plt.yticks(my_range, ordered_df['group'])
plt.title("Comparison of the value 1 and the value 2", loc='left')
plt.xlabel('Value of the variables')
plt.ylabel('Group')
plt.savefig('PNG/#184_lolipop_plot_with_2_groups.png', dpi=96)
plt.gca()





# ———————————————————————————————————
# 185 Lolipop plot with seaborn style

# libraries
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns

# Data
x = np.linspace(0, 2*np.pi, 100)
y = np.sin(x) + np.random.uniform(size=len(x)) - 0.2


# Create a color if the group is "B"
my_color=np.where(y>=0, 'orange', 'skyblue')

# The vertival plot is made using the hline function
# I load the seaborn library only to benefit the nice looking feature
import seaborn as sns
plt.vlines(x=x, ymin=0, ymax=y, color=my_color, alpha=0.4)
plt.scatter(x, y, color=my_color, s=1, alpha=1)
plt.title("Evolution of the value of ...", loc='left')
plt.xlabel('Value of the variable')
plt.ylabel('Group')
plt.savefig('PNG/#185_lolipop_plot_with_conditional_color.png', dpi=96)
plt.gca()











  -----------------------------------------
 |											|
 |											|
 |  SERIE #190 -> #200  ABOUT MATPLOTLIB
 |											|
 |											|
  -----------------------------------------


import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd






# ———————————————————————————————————
#  #190 CUSTOM THE TITLE OF YOUR PLOT

# Let's consider a basic plot, and add a basic title.

# libraries
import matplotlib.pyplot as plt
import numpy as np
 
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# An histogram 2D
x = np.random.normal(size=50000)
y = x * 3 + np.random.normal(size=50000)
plt.hist2d(x, y, bins=(50, 50), cmap=plt.cm.Reds)

# Add a basic title
#plt.title("A 2D histogram")
#plt.savefig('PNG/#190_Custom_title1.png', dpi=96)

# Control position. Available = ‘center’, ‘left’, ‘right’
#plt.title("A 2D histogram", loc='left')
#plt.savefig('PNG/#190_Custom_title2.png', dpi=96)

# Then you can adjust with horizontalalignment ('center', 'right', 'left') and 
# verticalalignment ('top', 'bottom', 'center', 'baseline')
#plt.title("A 2D histogram", loc='left', horizontalalignment='center', verticalalignment='center')
#plt.savefig('PNG/#190_Custom_title3.png', dpi=96)

# Control the font
#plt.title("A 2D histogram", fontsize=20,  fontweight=0, color='purple', loc='left', style='italic' )
#plt.savefig('PNG/#190_Custom_title3bis.png', dpi=96)
# to write in bold
#plt.title( "$\mathbf{write in bold}$" , loc="right")
#plt.savefig('PNG/#190_Custom_title4.png', dpi=96)
         
# Display the title on several lines
#plt.title('A 2D histogram\nwith the Reds palette', loc='left')
#plt.savefig('PNG/#190_Custom_title5.png', dpi=96)

# Several titles
#plt.title("A 2D histogram", loc='left', fontsize=18)
#plt.title("made in Python", loc='right', fontsize=13, color='grey', style='italic')
#plt.savefig('PNG/#190_Custom_title6.png', dpi=96)

# Mathematic equation. See: https://matplotlib.org/users/mathtext.html
#plt.title("$\mathcal{A}\mathrm{sin}(2 \omega t)$", fontsize=22)
#plt.savefig('PNG/#190_Custom_title7.png', dpi=96)

# Add a suptitle. Note the use of y=1.02 to avoid overlap
#plt.suptitle("A 2D histogram\n", fontsize=18, y=1.02)
#plt.title("Realized by the Python Graph Gallery", color="grey", style='italic')
#plt.savefig('PNG/#190_Custom_title8.png', dpi=96, bbox_inches='tight')

# Space between title and plot
plt.title("A 2D histogram", y=1.05)
plt.savefig('PNG/#190_Custom_title9.png', dpi=96, bbox_inches='tight')








# ———————————————————————————————————
#  #191 CUSTOM THE AXIS OF YOUR PLOT


# Basic plot
import numpy as np
import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
height = [3, 12, 5, 18, 45]
bars = ('A', 'B', 'C', 'D', 'E')
y_pos = np.arange(len(bars))
plt.bar(y_pos, height, color=(0.2, 0.4, 0.6, 0.6))


# Axis title
#plt.xlabel('title of the xlabel', fontweight='bold', color = 'orange', fontsize='17', horizontalalignment='center')
#plt.savefig('PNG/#191_Custom_axis1.png', dpi=96)

# Axis ticks
#plt.tick_params(axis='x', colors='red', direction='out', length=13, width=3)
#plt.savefig('PNG/#191_Custom_axis2.png', dpi=96)
# You can remove them:
#plt.tick_params(bottom='off')
#plt.savefig('PNG/#191_Custom_axis3.png', dpi=96)
 
    
# Axis labels. First argument must be the position. Second is the labels.
#plt.xticks(y_pos, bars, color='orange', rotation=45, fontweight='bold', fontsize='17', horizontalalignment='right')
#plt.savefig('PNG/#191_Custom_axis4.png', dpi=96)
# remove them
#plt.tick_params(labelbottom='off')
#plt.savefig('PNG/#191_Custom_axis5.png', dpi=96)

# Axis limits
#plt.xlim(0,20)
#plt.savefig('PNG/#191_Custom_axis6.png', dpi=96)









# ———————————————————————————————————
#  #192 MARGINS

# Let's consider a basic barplot.
import matplotlib.pyplot as plt
import numpy as np
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
y_pos = np.arange(len(bars))
bars = ('A','B','C','D','E')
height = [3, 12, 5, 18, 45]
plt.bar(y_pos, height)

# If we have long labels, we cannot see it properly
names = ("very long group name 1","very long group name 2","very long group name 3","very long group name 4","very long group name 5")
plt.xticks(y_pos, names, rotation=90)
plt.savefig('PNG/#192_increase_margin1.png')

# Thus we have to give more margin:
plt.subplots_adjust(bottom=0.4)
plt.savefig('PNG/#192_increase_margin2.png')

# It's the same concept if you need more space for your titles
import matplotlib.pyplot as plt
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
bars = ('A','B','C','D','E')
height = [3, 12, 5, 18, 45]
y_pos = np.arange(len(bars))
plt.bar(y_pos, height)
plt.title("This is\na very very\nloooooong\ntitle!")
plt.savefig('PNG/#192_increase_margin3.png')
plt.subplots_adjust(top=0.7)
plt.savefig('PNG/#192_increase_margin4.png')








# ———————————————————————————————————
#  #193 ANNOTATE YOUR CHART

# See more here
#https://matplotlib.org/users/annotations.html

# Library
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Basic chart
df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101) })
plt.plot( 'x', 'y', data=df, linestyle='none', marker='o')

# Annotate with text + Arrow
plt.annotate(
        # Label and coordinate
        'This point is interesting!', xy=(25, 50), xytext=(0, 80), 
        
        # Custom arrow
        arrowprops=dict(facecolor='black', shrink=0.05) 
        #)
#plt.savefig('PNG/#193_annotate1.png', dpi=96)



# Annotate with a square / Rectangle
import matplotlib.patches as patches
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101) })
my_dpi=96
fig1 = plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
ax1 = fig1.add_subplot(111)
ax1.plot( 'x', 'y', data=df, linestyle='none', marker='o')
ax1.add_patch(
    patches.Rectangle(
        (20, 25),   # (x,y)
        50,         # width
        50,         # height
        # You can add rotation as well with 'angle'
        alpha=0.3, facecolor="red", edgecolor="black", linewidth=3,  linestyle='solid'
    )
)
fig1.savefig('PNG/#193_annotate2.png', dpi=96)


# Annotate with a circle
import matplotlib.patches as patches
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101) })
my_dpi=96
fig1 = plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
ax1 = fig1.add_subplot(111)
ax1.plot( 'x', 'y', data=df, linestyle='none', marker='o')
ax1.add_patch(
    patches.Circle(
        (40, 35),   # (x,y)
        30,         # radiuc
        alpha=0.3, facecolor="green", edgecolor="black", linewidth=1,  linestyle='solid'
    )
)
fig1.savefig('PNG/#193_annotate3.png', dpi=96)



# Annotate with a segment 
# Library
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Basic chart
df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101) })
plt.plot( 'x', 'y', data=df, linestyle='none', marker='o')
plt.plot([80, 40], [30, 90], color="skyblue", lw=5, linestyle='solid', label="_not in legend")
plt.savefig('PNG/#193_annotate4.png', dpi=96)
plt.show()


# vline and hline
# Library
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101) })
plt.plot( 'x', 'y', data=df, linestyle='none', marker='o')
plt.axvline(40, color='r')
plt.axhline(40, color='green')
plt.savefig('PNG/#193_annotate5.png', dpi=96)


# Math equation. See https://matplotlib.org/users/mathtext.html
# Library
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101) })
plt.plot( 'x', 'y', data=df, linestyle='none', marker='o')
plt.text(40, 00, r'equation: $\sum_{i=0}^\infty x_i$', fontsize=20)
plt.savefig('PNG/#193_annotate6.png', dpi=96)

# Ellipse
# Annotate with a circle
import matplotlib.patches as patches
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101) })
my_dpi=96
fig1 = plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

ax1 = fig1.add_subplot(111, aspect='equal')
ax1.plot( 'x', 'y', data=df, linestyle='none', marker='o')
ax1.add_patch(
    patches.Ellipse(
        (40, 35),   # (x,y)
        30,         # width
        100,        # height
        45,         # radius
        alpha=0.3, facecolor="green", edgecolor="black", linewidth=1,  linestyle='solid'
    )
)
plt.savefig('PNG/#193_annotate7.png', dpi=96)








# ———————————————————————————————————
#  #194 SUBPLOTS

# In matplotlib, subplots are made with the subplot function.
# It works very well to put different graphics together.

# However, I recommand to use seaborn for faceting and small multiple!


# Basic example: 2 columns
from matplotlib import pyplot as plt
import pandas as pd
import numpy as np
df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101), 'z': (np.random.randn(100)*15+range(1,101))*2 })

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

plt.subplot(121)
plt.plot( 'x', 'y', data=df, marker='o', alpha=0.4)
plt.title("A subplot with 2 lines")
plt.subplot(122)
plt.plot( 'x','z', data=df, linestyle='none', marker='o', color="orange", alpha=0.3)
plt.savefig('PNG/#194_matplotlib_subplot1.png', dpi=96)
plt.show()


# Basic example: 2 rows
from matplotlib import pyplot as plt
import pandas as pd
import numpy as np
df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101), 'z': (np.random.randn(100)*15+range(1,101))*2 })
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

plt.subplot(211)
plt.plot( 'x', 'y', data=df, marker='o', alpha=0.4)
plt.title("A subplot with 2 lines")
plt.subplot(212)
plt.plot( 'x','z', data=df, linestyle='none', marker='o', color="orange", alpha=0.3)
plt.savefig('PNG/#194_matplotlib_subplot2.png', dpi=96)
plt.show()

# Basic example: share axis?
from matplotlib import pyplot as plt
import pandas as pd
import numpy as np
df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101), 'z': (np.random.randn(100)*15+range(1,101))*10 })
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

fig, axes = plt.subplots(nrows=2, ncols=1, sharex=True, sharey=True)
axes[0].plot( 'x', 'y', data=df, marker='o', alpha=0.4)
axes[1].plot( 'x','z', data=df, linestyle='none', marker='o', color="orange", alpha=0.3)
axes[0].title.set_text('These 2 plots have the same limit for the Y axis')
plt.savefig('PNG/#194_matplotlib_subplot3.png', dpi=96)
plt.show()

# Basic example: 2 rows and 2 columns
from matplotlib import pyplot as plt
import pandas as pd
import numpy as np
df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101), 'z': (np.random.randn(100)*15+range(1,101))*2 })
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

plt.subplot(221)
plt.plot( 'x', 'y', data=df, marker='o', alpha=0.4)
plt.subplot(222)
plt.plot( 'x','z', data=df, linestyle='none', marker='o', color="orange", alpha=0.3)
plt.subplot(223)
plt.plot( 'x','z', data=df, linestyle='none', marker='D', color="green", alpha=0.3)
plt.subplot(224)
plt.plot( 'x','z', data=df, marker='o', color="grey", alpha=0.3)
plt.savefig('PNG/#194_matplotlib_subplot4.png', dpi=96)
plt.show()


# Add a title for the whole figure
from matplotlib import pyplot as plt
import pandas as pd
import numpy as np
df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101), 'z': (np.random.randn(100)*15+range(1,101))*2 })
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# initialize a figure
fig=plt.figure()

# Do a 2x2 chart
plt.subplot(221)
plt.plot( 'x', 'y', data=df, marker='o', alpha=0.4)
plt.title('title of fig A', fontsize=10, color='grey', loc='left', style='italic')
plt.tick_params(labelbottom='off', bottom='off')
plt.subplot(222)
plt.plot( 'x','z', data=df, linestyle='none', marker='o', color="orange", alpha=0.3)
plt.title('title of fig B', fontsize=10, color='grey', loc='left', style='italic')
plt.tick_params(labelbottom='off', bottom='off')
plt.subplot(223)
plt.plot( 'x','z', data=df, linestyle='none', marker='D', color="green", alpha=0.3)
plt.title('title of fig C', fontsize=10, color='grey', loc='left', style='italic')
plt.subplot(224)
plt.plot( 'x','z', data=df, marker='o', color="grey", alpha=0.3)
plt.title('title of fig D', fontsize=10, color='grey', loc='left', style='italic')

# Add a title:
plt.suptitle('A title common to my 4 plots', y=1.02)
plt.savefig('PNG/#194_matplotlib_subplot5.png', dpi=96, bbox_inches='tight')
plt.show()



# Basic example: custom proportions

# Basic example: re-divise
# We need to use the subplot2grid function
# see more here:https://matplotlib.org/users/gridspec.html

from matplotlib import pyplot as plt
import pandas as pd
import numpy as np
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101), 'z': (np.random.randn(100)*15+range(1,101))*2 })
ax1 = plt.subplot2grid((2, 2), (0, 0), colspan=2)
ax1.plot( 'x', 'y', data=df, marker='o', alpha=0.4)
ax2 = plt.subplot2grid((2, 2), (1, 0), colspan=1)
ax2.plot( 'x','z', data=df, marker='o', color="grey", alpha=0.3)
ax3 = plt.subplot2grid((2, 2), (1, 1), colspan=1)
ax3.plot( 'x','z', data=df, marker='o', color="orange", alpha=0.3)
plt.savefig('PNG/#194_matplotlib_subplot6.png', dpi=96)

from matplotlib import pyplot as plt
import pandas as pd
import numpy as np
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101), 'z': (np.random.randn(100)*15+range(1,101))*2 })
ax1 = plt.subplot2grid((2, 4), (0, 0), colspan=4)
ax1.plot( 'x', 'y', data=df, marker='o', alpha=0.4)
ax2 = plt.subplot2grid((2, 4), (1, 0), colspan=3)
ax2.plot( 'x','z', data=df, marker='o', color="grey", alpha=0.3)
ax3 = plt.subplot2grid((2, 4), (1, 3), colspan=1)
ax3.plot( 'x','z', data=df, marker='o', color="orange", alpha=0.3)
plt.savefig('PNG/#194_matplotlib_subplot7.png', dpi=96)

from matplotlib import pyplot as plt
import pandas as pd
import numpy as np
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101), 'z': (np.random.randn(100)*15+range(1,101))*2 })
ax1 = plt.subplot2grid((2, 2), (0, 0), colspan=1)
ax1.plot( 'x', 'y', data=df, marker='o', alpha=0.4)
ax2 = plt.subplot2grid((2, 2), (1, 0), colspan=1)
ax2.plot( 'x','z', data=df, marker='o', color="grey", alpha=0.3)
ax3 = plt.subplot2grid((2, 2), (0, 1), rowspan=2)
ax3.plot( 'x','z', data=df, marker='o', color="orange", alpha=0.3)
plt.savefig('PNG/#194_matplotlib_subplot8.png', dpi=96)











# ———————————————————————————————————
#  #195 THE USE OF FIG, AX = PLT.SUBPLOTS()

Often we see example like that:

# library
import matplotlib.pyplot as plt
# plot
f, ax = plt.subplots()
ax.plot([1,4,2,5])
f.show()

So it's common to use the subplot function, even to do just one plot!
It is a convenient and pythonic way to get reference two both figure (f) and axis (ax) in a oneliner. 
You unpack this tuple into the variables f and ax

If you start doing like that, you can then make a change to 

*** to change axis level features:
ax.set_title('Simple plot')

*** to change figure-level attributes : e.g. with 
fig.savefig('yourfilename.png')

pyplot has a notion of 'current figure' and 'current axes' that all the functions delegate to

object oriented API (ax..) (
	VS 
pyplot is the 'scripting' level API in matplotlib. Figure and the Axes are created but we don't see it!

each function available in pyplot has an equivalent for ax. plt.xlim <-> ax.set_xlim()

AXES=la zone de plot, elle continent un Xaxis et un Y axis!

# ======== WITH AX
# library
import matplotlib.pyplot as plt
# plot
f, ax = plt.subplots()
ax.plot([1,4,2,5])
ax.set_title('Simple plot')
f.show()


# ======== WITH PLT
# library
import matplotlib.pyplot as plt
# plot
plt.plot([1,4,2,5])
plt.title('Simple plot')
plt.show()


#creating the arrays for testing
x = np.arange(1, 100)
y = np.sqrt(x)
#1st way
plt.plot(x, y)
#2nd way
ax = plt.subplot()
ax.plot(x, y)
#3rd way
figure = plt.figure()
new_plot = figure.add_subplot(111)
new_plot.plot(x, y)







# ———————————————————————————————————
#  #196 CALL ONE COLOR


# library & dataset
from matplotlib import pyplot as plt
import pandas as pd
import numpy as np
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
df=pd.DataFrame({'x': range(1,101), 'y': np.random.randn(100)*15+range(1,101), 'z': (np.random.randn(100)*15+range(1,101))*2 })


# 1.1 color by name
plt.plot( 'x', 'y', data=df, marker='o', color='mediumvioletred')
plt.savefig('PNG/#196_matplotlib_call_one_colour1.png', dpi=96)
# MAtplotlib donne toutes les couleurs existantes ici: https://matplotlib.org/examples/color/named_colors.html
# J'ai récupéré le PNG: #100_Python_color_name.png


# 1.2 color by abbreviation
plt.gca()
plt.plot( 'x', 'y', data=df, marker='o', color='c')
plt.savefig('PNG/#196_matplotlib_call_one_colour2.png', dpi=96)

plt.show()
b: blue
g: green
r: red
c: cyan
m: magenta
y: yellow
k: black
w: white

# 1.3 color by hex code
plt.gca()
plt.plot( 'x', 'y', data=df, marker='o', color='#8f9805')
plt.savefig('PNG/#196_matplotlib_call_one_colour3.png', dpi=96)
plt.show()
# See http://htmlcolorcodes.com/

# 1.4 color calling RBG
plt.gca()
plt.plot( 'x', 'y', data=df, marker='o', color=(0.9, 0.2, 0.5, 0.2))
plt.savefig('PNG/#196_matplotlib_call_one_colour4.png', dpi=96)
plt.show()
# See http://htmlcolorcodes.com/ as well


# 1.5 color using a number = string representation of a float value: --> Black and white
plt.gca()
plt.plot( 'x', 'y', data=df, marker='o', color='0.9')
plt.savefig('PNG/#196_matplotlib_call_one_colour5.png', dpi=96)
plt.show()
# 0 is black, 1 is white

# 1.6 transparency
plt.gca()
plt.plot( 'x', 'y', data=df, marker='o', color='blue', alpha=0.3)
plt.savefig('PNG/#196_matplotlib_call_one_colour6.png', dpi=96)
plt.show()
# 0 is black, 1 is white

# 1.6 named colors from the xkcd color survey
# liste here: https://xkcd.com/color/rgb/
#cal them like that:
#plt.plot([0, 1], [0, 1], sns.xkcd_rgb["pale red"], lw=3)





# ———————————————————————————————————
#  #197 CALL SEVERAL COLOR: PALETTE

# There are 3 types of palettes.
# You can call existing palette, or make your own one.
# Most famous existing ones: Rcolorbrewer / viridis / hand palette
    
# library & dataset
from matplotlib import pyplot as plt
import numpy as np
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# create data
x = np.random.rand(15)
y = x+np.random.rand(15)
z = x+np.random.rand(15)
z=z*z



# 2.1 Sequential

#see names here: www.r-graph-gallery.com/38-rcolorbrewers-palettes/
# mettre une liste des noms
# mettre une image avec que les diverging.
plt.scatter(x, y, s=z*2000, c=x, cmap="BuPu", alpha=0.4, edgecolors="grey", linewidth=2)
plt.savefig('PNG/#197_matplotlib_color_palette1.png', dpi=96)

# You can reverse it:
#plt.scatter(x, y, s=z*2000, c=x, cmap="BuPu_r", alpha=0.4, edgecolors="grey", linewidth=2)
#plt.savefig('PNG/#197_matplotlib_color_palette2.png', dpi=96)

#*** OTHER: viridis / inferno / plasma / magma
plt.scatter(x, y, s=z*2000, c=x, cmap="plasma", alpha=0.4, edgecolors="grey", linewidth=2)
plt.savefig('PNG/#197_matplotlib_color_palette3.png', dpi=96)



# 2.2 Diverging

# library & dataset
from matplotlib import pyplot as plt
import numpy as np
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# create data
x = np.random.rand(80) - 0.5
y = x+np.random.rand(80)
z = x+np.random.rand(80)

#see names here: www.r-graph-gallery.com/38-rcolorbrewers-palettes/
# mettre une liste des noms
# mettre une image avec que les diverging.
#plt.scatter(x, y, s=z*2000, c=x, cmap="PuOr", alpha=0.4, edgecolors="grey", linewidth=2)
#plt.savefig('PNG/#197_matplotlib_color_palette4.png', dpi=96)

plt.scatter(x, y, s=z*2000, c=x, cmap="PuOr_r", alpha=0.4, edgecolors="grey", linewidth=2)
plt.savefig('PNG/#197_matplotlib_color_palette5.png', dpi=96)




# 2.4 Discrete / Qualitative

# library & dataset
from matplotlib import pyplot as plt
import numpy as np
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Data
import seaborn as sns
df = sns.load_dataset('iris')

# We use the specie column to choose the color. We need to make a numerical vector from it:
df['species']=pd.Categorical(df['species'])
df['species'].cat.codes

# Scatter
plt.scatter(df['sepal_length'], df['sepal_width'], s=62, c=df['species'].cat.codes, cmap="Set1", alpha=0.9, linewidth=0)
plt.savefig('PNG/#197_matplotlib_color_palette5.png', dpi=96)


# 2.5 Build your own color palette

# 2.6 make color palette longuer

# 2.7 Control diverging point in diverging color palette.

# 2.8 Legend















# ———————————————————————————————————
#  #198 Background colors

# Change the background color of the plot area:
plt.rcParams['figure.facecolor'] = 'black'
plt.rcParams['axes.facecolor'] = 'black'











# ———————————————————————————————————
#  #199 Matplotlib style sheets


# libraries and data
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Make a data frame
df=pd.DataFrame({'x': range(1,11), 'y1': np.random.randn(10), 'y2': np.random.randn(10)+range(1,11), 'y3': np.random.randn(10)+range(11,21), 'y4': np.random.randn(10)+range(6,16), 'y5': np.random.randn(10)+range(4,14), 'y6': np.random.randn(10)+range(2,12), 'y7': np.random.randn(10)+range(5,15), 'y8': np.random.randn(10)+range(4,14) })

# All the possibility of style:
possibilities = [u'seaborn-darkgrid', u'seaborn-notebook', u'classic', u'seaborn-ticks', u'grayscale', u'bmh', u'seaborn-talk', u'dark_background', u'ggplot', u'fivethirtyeight', u'_classic_test', u'seaborn-colorblind', u'seaborn-deep', u'seaborn-whitegrid', u'seaborn-bright', u'seaborn-poster', u'seaborn-muted', u'seaborn-paper', u'seaborn-white', u'seaborn-pastel', u'seaborn-dark', u'seaborn', u'seaborn-dark-palette']

# Initialise figure
my_dpi=96
plt.figure(figsize=(1000/my_dpi, 1000/my_dpi), dpi=my_dpi)


# Let's do a chart per possibility:
for n, v in enumerate(possibilities):
    print n, v
    
    # I set the new style
    plt.style.use(v)

    # Start new place in the figure
    plt.subplot(5 ,5, n + 1)
    
    # multiple line plot
    for column in df.drop('x', axis=1):  
        plt.plot(df['x'], df[column], marker='', color='grey', linewidth=1, alpha=0.4)
    
    # And highlith one
    plt.plot(df['x'], df['y5'], marker='', color='orange', linewidth=4)
    
    # Add a title to say which style it is
    plt.title(v, fontsize=10, fontweight=0, color='grey', loc='left')
    
    # remove labels
    plt.tick_params(labelbottom='off')
    plt.tick_params(labelleft='off')

    
plt.savefig('PNG/#199_Matplotlib_style_sheet.png', dpi=96, bbox_inches='tight')
  
    

            
            
            
            
            




  -----------------------------------------
 |											|
 |											|
 |  SERIE #200 -> #210  TREEMAP
 |											|
 |											|
  -----------------------------------------

https://gist.github.com/gVallverdu/0b446d0061a785c808dbe79262a37eea

Pas grand chose a faire.... pas de package dispo valable a priori..


# ———————————————————————————————————
#  #200  Basic treemap with one level
import matplotlib.pyplot as plt
import squarify    # pip install squarify (algorithm for treemap)

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# If you have 2 lists
squarify.plot(sizes=[13,22,35,5], label=["group A", "group B", "group C", "group D"], alpha=.7 )
plt.axis('off')
plt.show()

# If you have a data frame?
import pandas as pd
df = pd.DataFrame({'nb_people':[8,3,4,2], 'group':["group A", "group B", "group C", "group D"] })
squarify.plot(sizes=df['nb_people'], label=df['group'], alpha=.8 )
plt.axis('off')
plt.savefig('PNG/#200_Basic_Treemap_with_squarify.png')
plt.show()




# ———————————————————————————————————
#  #201 Custom your treemap

#libraries
import matplotlib.pyplot as plt
import pandas as pd
import squarify    # pip install squarify (algorithm for treemap)

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Change color
squarify.plot(sizes=[13,22,35,5], label=["group A", "group B", "group C", "group D"], color=["red","green","blue", "grey"], alpha=.4 )
plt.axis('off')
plt.savefig('PNG/#201_Custom_Treemap1.png')
plt.show()


# Custom label appearance 
padded_squarify.plot(sizes=[13,22,35,5], label=["group A", "group B", "group C", "group D"], color=["red","green","blue", "grey"], alpha=.4 )
plt.axis('off')
plt.show()

# Custom separation between groups

# Color depends of value

# Position of each individual:
# Squares are positionned in the same order as in the list.
# It can be usefull to shuffle this order for a better result






# ———————————————————————————————————
#  #202 Map color to size

#libraries
import matplotlib
import matplotlib.pyplot as plt
import pandas as pd
import squarify    # pip install squarify (algorithm for treemap)

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Create a dataset:
my_values=[i**3 for i in range(1,100)]

# create a color palette, mapped to these values
cmap = matplotlib.cm.Blues
mini=min(my_values)
maxi=max(my_values)
norm = matplotlib.colors.Normalize(vmin=mini, vmax=maxi)
colors = [cmap(norm(value)) for value in my_values]

# Change color
squarify.plot(sizes=my_values, alpha=.8, color=colors )
plt.axis('off')
plt.savefig('PNG/#202_Treemap_map_color_to_size.png')
plt.show()





# ———————————————————————————————————
#  #203 Treemap with group and subgroups
# TO FINISH


#libraries
import matplotlib
import matplotlib.pyplot as plt
import pandas as pd
import squarify    # pip install squarify (algorithm for treemap)

# Build Dataset
import pandas as pd
df = pd.DataFrame({
	'group':["group A", "group A", "group A", "group A", "group B", "group B", "group C",  "group C",  "group C"],
	'subgroup':[1,2,3,4,1,2,1,2,3], 
	'value':[13,5,22,12,11,7,3,1,23]
	})

# Prepare color:
mycolors=list()
all_pal=[matplotlib.cm.Blues, matplotlib.cm.Greens, matplotlib.cm.Oranges]
num=-1
for i in df.group.unique():
	num+=1
	cmap = all_pal[num]
	tmp=df[df.group==i]
	mini=min(tmp.value)
	maxi=max(tmp.value)
	norm = matplotlib.colors.Normalize(vmin=mini-12, vmax=maxi+12)
	colors = [cmap(norm(value)) for value in tmp.value]
	mycolors=mycolors+colors
	
# Prepare labels:
df["lab"]=df.group + " - " + df.subgroup.map(str)

# Plot
squarify.plot(sizes=df['value'], alpha=.8, color=mycolors, labels=df['lab'].map(str) )
plt.axis('off')
plt.show()








  -----------------------------------------
 |											|
 |											|
 |  SERIE #220 -> #230  SANKEY DIAGRAM
 |											|
 |											|
  -----------------------------------------


# Repo
import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd



# ———————————————————————————————————
#  #220 Sankey with Matplotlib

# Example from the doc:
# https://matplotlib.org/api/sankey_api.html

# Libraries
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.sankey import Sankey

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# basic sankey chart
Sankey(flows=[0.25, 0.15, 0.60, -0.20, -0.15, -0.05, -0.50, -0.10],
       labels=['', '', '', 'First', 'Second', 'Third', 'Fourth', 'Fifth'],
       orientations=[-1, 1, 0, 1, 1, 1, 0, -1]).finish()
plt.title("Sankey diagram with default settings")

plt.savefig('PNG/#220_Sankey_Matplotlib.png', dpi=96)







matplotlib.sankey¶ = Pourrave, natif de matplotlib
plotly a une bonne version

ipysankey widget = best way = a wrapper of d3-sankey-diagram
Documentation=https://github.com/ricklupton/ipysankeywidget
Author=Rick Lupton
Installation: pip install ipysankeywidget

import ipywidgets as widgets
from ipysankeywidget import SankeyWidget
links = [
    {'source': 'start', 'target': 'A', 'value': 2},
    {'source': 'A', 'target': 'B', 'value': 2},
    {'source': 'C', 'target': 'A', 'value': 2},
    {'source': 'A', 'target': 'C', 'value': 2},
]
w = SankeyWidget(links=links, margins=dict(top=0, bottom=0, left=50, right=100))
w


--> Marche pas car Javascript non reconnu.. relou





import matplotlib.pyplot as plt
from ipysankeywidget import SankeyWidget
from ipywidgets import Layout

layout = Layout(width="300", height="200")
def sankey(**value):
    """Show SankeyWidget with default values for size and margins"""
    return SankeyWidget(layout=layout,
                        margins=dict(top=10, bottom=0, left=30, right=60),
                        **value)

links = [
    {'source': 'A', 'target': 'B', 'value': 1},
    {'source': 'B', 'target': 'C', 'value': 1},
    {'source': 'A', 'target': 'D', 'value': 1},
]
sankey(links=links)




























  -----------------------------------------
 |											|
 |											|
 |  SERIE #230 -> #240  CHORD DIAGRAM
 |											|
 |											|
  -----------------------------------------






# ———————————————————————————————————
#  #230 Chord diagram with plotly
png taken on the web.
Code to complicated.
PLOTLY : https://plot.ly/python/filled-chord-diagram/ --> Mais faut s'accrocher...



# ———————————————————————————————————
#  #231 Chord diagram with bokeh

BOKEH : http://bokeh.pydata.org/en/0.12.5/docs/gallery/chord_chart.html

import pandas as pd
from bokeh.charts import output_file, Chord
from bokeh.io import show
from bokeh.sampledata.les_mis import data

nodes = data['nodes']
links = data['links']

nodes_df = pd.DataFrame(nodes)
links_df = pd.DataFrame(links)

source_data = links_df.merge(nodes_df, how='left', left_on='source', right_index=True)
source_data = source_data.merge(nodes_df, how='left', left_on='target', right_index=True)
source_data = source_data[source_data["value"] > 5]
source_data

chord_from_df = Chord(source_data, source="name_x", target="name_y", value="value")
output_file('chord-diagram-bokeh.html', mode="inline")
show(chord_from_df)











  -----------------------------------------
 |											|
 |											|
 |  SERIE #240 -> #250  AREA CHART
 |											|
 |											|
  -----------------------------------------

# Repo
import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd


# ———————————————————————————————————
# 240 Basic area chart

# Explain inputs.
# If several variable, go to stacked area section

# library
import numpy as np
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Create data
x=range(1,6)
y=[1,4,6,8,4]

# Area plot
plt.fill_between(x, y)
plt.savefig('PNG/#240_basic_area_chart.png', dpi=96)

# Note that we could also use the stackplot function: plt.stackplot(x,y)
# but fill_between is more convenient for future customization.





# ———————————————————————————————————
# 241 Custom area chart


# library
import numpy as np
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Your x and y axis
x=range(1,15)
y=[1,4,6,8,4,5,3,2,4,1,5,6,8,7]

# Change the color and its transparency
plt.fill_between( x, y, color="skyblue", alpha=0.4)
plt.savefig('PNG/#241_custom_area_chart1.png', dpi=96)

# Same, but add a stronger line on top (edge)
plt.fill_between( x, y, color="skyblue", alpha=0.2)
plt.plot(x, y, color="Slateblue", alpha=0.6)
# See the line plot function to learn how to customize the plt.plot function
plt.savefig('PNG/#241_custom_area_chart2.png', dpi=96)

# seaborn style & title
import seaborn as sns
plt.fill_between( x, y, color="skyblue", alpha=0.3)
plt.plot(x, y, color="skyblue")
plt.title("An area chart", loc="left")
plt.xlabel("Value of X")
plt.ylabel("Value of Y")
plt.savefig('PNG/#241_custom_area_chart3.png', dpi=96)





# ———————————————————————————————————
# 242 Area Chart and faceting

# For more info concerning faceting:
# https://seaborn.pydata.org/generated/seaborn.FacetGrid.html

# libraries
import numpy as np
import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Create a dataset
my_count=["France","Australia","Japan","USA","Germany","Congo","China","England","Spain","Greece","Marocco","South Africa","Indonesia","Peru","Chili","Brazil"]
df = pd.DataFrame({
        "country":np.repeat(my_count, 10),
        "years":range(2000, 2010) * 16,
        "value":np.random.rand(160)
        })

# Create a grid : initialize it
g = sns.FacetGrid(df, col='country', hue='country', col_wrap=4, )

# Add the line over the area with the plot function
g = g.map(plt.plot, 'years', 'value')

# Fill the area with fill_between
g = g.map(plt.fill_between, 'years', 'value', alpha=0.2).set_titles("{col_name} country")

# Control the title of each facet
g = g.set_titles("{col_name}")

# Add a title for the whole plo
plt.subplots_adjust(top=0.92)
g = g.fig.suptitle('Evolution of the value of stuff in 16 countries')

plt.savefig('PNG/#242_area_chart_and_faceting.png', dpi=96)





# ———————————————————————————————————
# 243 Another example
# https://stackoverflow.com/questions/24547047/how-to-make-matplotlib-graphs-look-professionally-done-like-this
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
sns.set_style("whitegrid")


my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Color palette
blue, = sns.color_palette("muted", 1)

# Create data
x = np.arange(23)
y = np.random.randint(8, 20, 23)

# Make the plot
fig, ax = plt.subplots()
ax.plot(x, y, color=blue, lw=3)
ax.fill_between(x, 0, y, alpha=.3)
ax.set(xlim=(0, len(x) - 1), ylim=(0, None), xticks=x)


plt.savefig('PNG/#243_another_area_chart.png', dpi=96)








  -----------------------------------------
 |											|
 |											|
 |  SERIE #250 -> #260  STACKED AREA CHART
 |											|
 |											|
  -----------------------------------------

# Repo
import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd



# ———————————————————————————————————
# 250 Most basic stacked area chart

--> show other format


# library
import numpy as np
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# --- FORMAT 1

# Your x and y axis
x=range(1,6)
y=[ [1,4,6,8,9], [2,2,7,10,12], [2,8,5,10,6] ]

# Basic stacked area chart.
plt.stackplot(x,y, labels=['A','B','C'])
plt.legend(loc='upper left')
plt.savefig('PNG/#250_basic_stacked_area_chart.png', dpi=96)
#plt.show()


# --- FORMAT 2
x=range(1,6)
y1=[1,4,6,8,9]
y2=[2,2,7,10,12]
y3=[2,8,5,10,6] 

# Basic stacked area chart.
plt.stackplot(x,y1, y2, y3, labels=['A','B','C'])
plt.legend(loc='upper left')


# --- FORMAT 3: Long formats in pd dataframe = to do.



# ———————————————————————————————————
# 251 Stacked area chart with seaborn style

# library
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Data
x=range(1,6)
y=[ [1,4,6,8,9], [2,2,7,10,12], [2,8,5,10,6] ]

# Plot
plt.stackplot(x,y, labels=['A','B','C'])
plt.legend(loc='upper left')
plt.savefig('PNG/#251_seaborn_style_on_stacked_area_chart.png', dpi=96)
plt.show()






# ———————————————————————————————————
# 252 Play with baseline
# By Hooked http://thoppe.github.io/
# On stack overflow https://stackoverflow.com/questions/2225995/how-can-i-create-stacked-line-graph-with-matplotlib

# library
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Create data
X = np.arange(0, 10, 1) 
Y = X + 5 * np.random.random((5, X.size))

# There are 4 types of baseline we can use:
baseline = ["zero", "sym", "wiggle", "weighted_wiggle"]

# Let's make 4 plots, 1 for each baseline
for n, v in enumerate(baseline):
    if n<3 :
        plt.tick_params(labelbottom='off')
    plt.subplot(2 ,2, n + 1)
    plt.stackplot(X, *Y, baseline=v)
    plt.title(v)
    plt.axis('tight', size=0.2)
plt.savefig('PNG/#252_baseline_and_stacked_area_chart.png', dpi=96)
#plt.show()




# ———————————————————————————————————
# 253 Customize color

# library
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns


my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Your x and y axis
x=range(1,6)
y=[ [10,4,6,5,3], [12,2,7,10,1], [8,18,5,7,6] ]

# use a known color palette (see..)
pal = sns.color_palette("Set1")
plt.stackplot(x,y, labels=['A','B','C'], colors=pal, alpha=0.4 )
plt.legend(loc='upper right')
plt.savefig('PNG/#253_color_and_stacked_area_chart1.png', dpi=96)
plt.show()


# create your palette
pal = ["#9b59b6", "#e74c3c", "#34495e", "#2ecc71"]
plt.stackplot(x,y, labels=['A','B','C'], colors=pal, alpha=0.4 )
plt.legend(loc='upper right')
plt.savefig('PNG/#253_color_and_stacked_area_chart2.png', dpi=96)






# ———————————————————————————————————
# 254 With Pandas

WITH PANDAS

# library
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Dataset
df = pd.DataFrame(np.random.rand(10, 4), columns=['a', 'b', 'c', 'd'])

# plot
df.plot.area();
plt.savefig('PNG/#254_pandas_stacked_area_chart2.png', dpi=96)






# ———————————————————————————————————
# 255 Percentage area chart

# library
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Make data
data = pd.DataFrame({ 
	'group_A':[1,4,6,8,9],
	'group_B':[2,24,7,10,12],
	'group_C':[2,8,5,10,6],
	}, index=range(1,6))

# We need to transform the data from raw data to percentage (fraction)
data_perc = data.divide(data.sum(axis=1), axis=0)

# Make the plot
plt.stackplot(range(1,6),  data_perc["group_A"],  data_perc["group_B"],  data_perc["group_C"], labels=['A','B','C'])
plt.legend(loc='upper left')
plt.margins(0,0)
plt.title('100 % stacked area chart')
plt.savefig('PNG/#255_percent_stacked_area_chart.png', dpi=96)

plt.show()








  -----------------------------------------
 |											|
 |											|
 |  SERIE #260 -> #270  WORDCLOUDS
 |											|
 |											|
  -----------------------------------------

doc: https://github.com/amueller/word_cloud
by: Andreas Mueller: http://amueller.github.io/
pip install wordcloud



# ———————————————————————————————————
# 260 Basic Wordcloud

# Libraries
from wordcloud import WordCloud
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Create a list of word
text=("Python Python Python Matplotlib  Matplotlib Seaborn Network Plot Violin Chart Pandas Datascience Wordcloud Spider Radar Parrallel Alpha Color Brewer Density Scatter Barplot Barplot Boxplot Violinplot Treemap Stacked Area Chart Chart Visualization Dataviz Donut Pie Time-Series Wordcloud Wordcloud Sankey Bubble")

# Create the wordcloud object
wordcloud = WordCloud(width=480, height=480, margin=0).generate(text)

# Display the generated image:
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis("off")
plt.margins(x=0, y=0)
plt.savefig('PNG/#260_Basic_Wordcloud.png')
plt.show()






# ———————————————————————————————————
# 261 Custom the Wordcloud

# Libraries
from wordcloud import WordCloud
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Create a list of word
text=("Python Python Python Matplotlib  Matplotlib Seaborn Network Plot Violin Chart Pandas Datascience Wordcloud Spider Radar Parrallel Alpha Color Brewer Density Scatter Barplot Barplot Boxplot Violinplot Treemap Stacked Area Chart Chart Visualization Dataviz Donut Pie Time-Series Wordcloud Wordcloud Sankey Bubble")

# Control the maximum and minimum font size:
wordcloud = WordCloud(width=480, height=480, max_font_size=20, min_font_size=10).generate(text)
plt.figure()
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis("off")
plt.margins(x=0, y=0)
plt.savefig('PNG/#261_Custom_Wordcloud1.png')
plt.show()

# Control the number of words, if I want max 5 words:
wordcloud = WordCloud(width=480, height=480, max_words=3).generate(text)
plt.figure()
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis("off")
plt.margins(x=0, y=0)
plt.savefig('PNG/#261_Custom_Wordcloud2.png')
plt.show()

# To remove some word
wordcloud = WordCloud(width=480, height=480, stopwords=["Python", "Matplotlib"]).generate(text)
plt.figure()
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis("off")
plt.margins(x=0, y=0)
plt.savefig('PNG/#261_Custom_Wordcloud3.png')
plt.show()

# To change background
wordcloud = WordCloud(width=480, height=480, background_color="skyblue").generate(text)
plt.figure()
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis("off")
plt.margins(x=0, y=0)
plt.savefig('PNG/#261_Custom_Wordcloud4.png')
plt.show()

# To change the palette use for words:
wordcloud = WordCloud(width=480, height=480, colormap="Blues").generate(text)
plt.figure()
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis("off")
plt.margins(x=0, y=0)
plt.savefig('PNG/#261_Custom_Wordcloud5.png')
plt.show()





# ———————————————————————————————————
# 262 Wordcloud with a mask

# Libraries
from wordcloud import WordCloud
import matplotlib.pyplot as plt
import numpy as np
from PIL import Image # to import the image

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Create a list of word
# https://en.wikipedia.org/wiki/Data_visualization
text=("Data visualization or data visualisation is viewed by many disciplines as a modern equivalent of visual communication. It involves the creation and study of the visual representation of data, meaning information that has been abstracted in some schematic form, including attributes or variables for the units of information A primary goal of data visualization is to communicate information clearly and efficiently via statistical graphics, plots and information graphics. Numerical data may be encoded using dots, lines, or bars, to visually communicate a quantitative message.[2] Effective visualization helps users analyze and reason about data and evidence. It makes complex data more accessible, understandable and usable. Users may have particular analytical tasks, such as making comparisons or understanding causality, and the design principle of the graphic (i.e., showing comparisons or showing causality) follows the task. Tables are generally used where users will look up a specific measurement, while charts of various types are used to show patterns or relationships in the data for one or more variables")

# Load the image 
# (found here:
wave_mask = np.array(Image.open( "/Users/yan/Desktop/wave.jpg"))

# Make the figure
wordcloud = WordCloud(mask=wave_mask).generate(text)
plt.figure()
plt.imshow(wordcloud, interpolation="bilinear")
plt.axis("off")
plt.margins(x=0, y=0)
plt.savefig('PNG/#262_Wordcloud_with_a_Mask.png')
plt.show()


# --> Add other examples from the github accounts


# OTHER EXAMPLES
# ALICE https://github.com/amueller/word_cloud/blob/master/examples/masked.py
# OTHER https://github.com/amueller/word_cloud/tree/master/examples









  -----------------------------------------
 |											|
 |											|
 |  SERIE #270 -> #280  BUBBLE PLOT
 |											|
 |											|
  -----------------------------------------

# Repo
import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd



# ———————————————————————————————————
# 270 Basic bubble plot

# The basic Idea is to use the scatter function of matplotlib. This one has an argument s that control the size of dots. 
# So we just have to give a vector to this field.

# libraries
import matplotlib.pyplot as plt
import numpy as np
 
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# create data
x = np.random.rand(40)
y = np.random.rand(40)
z = np.random.rand(40)

# use the scatter function 
plt.scatter(x, y, s=z*1000, alpha=0.5)
plt.savefig('PNG/#270_Basic_Bubble_plot.png')
plt.show()

# Note that we have to multiple the size by 1000 to get an interesting result.
# Matpltlib is'nt intelligent, youhave to specify this size, it does not do an interesting mapping as ggplot2 does.








# ———————————————————————————————————
# 271 Custom your bubbles

# libraries
import matplotlib.pyplot as plt
import numpy as np

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# create data
x = np.random.rand(5)
y = np.random.rand(5)
z = np.random.rand(5)

# Change color with c and alpha
plt.scatter(x, y, s=z*4000, c="red", alpha=0.4)
plt.savefig('PNG/#271_Bubble_plot_customization1.png', dpi=96)
plt.clf()
#plt.show()

# Change shape with marker
plt.scatter(x, y, s=z*4000, marker="D")
plt.savefig('PNG/#271_Bubble_plot_customization2.png', dpi=96)
plt.clf()
#plt.show()

# Change global size playing with s
plt.scatter(x, y, s=z*200)
plt.savefig('PNG/#271_Bubble_plot_customization3.png', dpi=96)
plt.clf()
#plt.show()

# Change line around dot
plt.scatter(x, y, s=z*4000, c="green", alpha=0.4, linewidth=6)
plt.savefig('PNG/#271_Bubble_plot_customization4.png', dpi=96)
plt.clf()
#plt.show()

# pimp your plot with the seaborn style
import seaborn as sns
plt.scatter(x, y, s=z*4000, c="green", alpha=0.4, linewidth=6)
# Add titles (main and on axis)
plt.xlabel("the X axis")
plt.ylabel("the Y axis")
plt.title("A bubble plot", loc="left")

plt.savefig('PNG/#271_Bubble_plot_customization5.png', dpi=96)







# ———————————————————————————————————
# 272 Map a color to your bubble plot

# libraries
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# create data
x = np.random.rand(15)
y = x+np.random.rand(15)
z = x+np.random.rand(15)
z=z*z

# Change color with c and alpha. I map the color to the X axis value.
plt.scatter(x, y, s=z*2000, c=x, cmap="Blues", alpha=0.4, edgecolors="grey", linewidth=2)

# Add titles (main and on axis)
plt.xlabel("the X axis")
plt.ylabel("the Y axis")
plt.title("A colored bubble plot")

plt.savefig('PNG/#272_Bubble_plot_with_mapped_color.png', dpi=96)
plt.show()

# Quite hard to add a legend however...







# ———————————————————————————————————
# 273 bubble plot from pairs coordinates


# libraries
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Create a data frame with X and Y values, some pairs exist several times !
x=np.repeat(range(1,10),3)
y=range(1,4)*3
df=pd.DataFrame({'x': x, 'y': y })




import matplotlib.pyplot as plt



import collections
import numpy as np

data = [tuple(pair)
        for pair in np.random.uniform(5, size=(20,2))
        for c in range(np.random.random_integers(50))]
count = collections.Counter(data)

points = count.keys()
x, y = zip(*points)
sizes = np.array(count.values())**2
plt.scatter(x, y, s=sizes, marker='o', c=sizes)
plt.show()









# ———————————————————————————————————
# 272 Bubble plot with names into bubbles


# libraries
import matplotlib.pyplot as plt
import numpy as np

#my_dpi=96
#plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# create data
x = np.random.rand(15)
y = x+np.random.rand(15)
z = x+np.random.rand(15)
text=[chr(i) for i in range(ord('a'),ord('o')+1)]
z=z*z

# Change color with c and alpha. I map the color to the X axis value.
plt.scatter(x, y, s=z*2000, c=x, cmap="Blues", alpha=0.4, edgecolors="grey", linewidth=2)

# Add text into bubbles
for i, txt in enumerate(text):
  plt.text(x=x[i], y=y[i], s=txt, size=11, horizontalalignment='center', verticalalignment='center')

# Add titles (main and on axis)
plt.xlabel("the X axis")
plt.ylabel("the Y axis")
plt.title("A colored bubble plot")

#plt.savefig('PNG/#272_Bubble_plot_with_mapped_color.png')
plt.show()


# --> show how to custom this label








  -----------------------------------------
 |                      |
 |                      |
 |  SERIE #280 -> #290  BASIC MAPS
 |                      |
 |                      |
  -----------------------------------------

# Repo
import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd

# To find the position of a place in the world.
#https://epsg.io/map




# ———————————————————————————————————
# 280 Basic Map with gmplot
# doc : https://github.com/vgm64/gmplot
# Installation is easy pip install gmplot
# --> Hard to put it online
# Load library
import gmplot as gmp

# Create an object that is your map
mylat=37.428
mylong=-120
gmap = gmp.GoogleMapPlotter(mylat, mylong, zoom=9)

# Save it
gmap.draw("PNG/#280_basic_map_gmplot1.html")


help(gmp.GoogleMapPlotter)

gmap.plot(latitudes, longitudes, 'cornflowerblue', edge_width=10)
gmap.scatter(more_lats, more_lngs, '#3B0B39', size=40, marker=False)
gmap.scatter(marker_lats, marker_lngs, 'k', marker=True)
gmap.heatmap(heat_lats, heat_lngs)

gmap.draw("PNG/#280_basic_map_gmplot1.html")






# ———————————————————————————————————
# 281 First Basic Map with Basemap
# Installation is really hard since you need geos and other stuff.
# See   https://www.youtube.com/watch?v=mXR47qiTdWQ

# This page shows how to make a basic map: the basic elements

#BASEMAPS
#http://basemaptutorial.readthedocs.io/en/latest/plotting_data.html
#http://www.datadependence.com/2016/06/creating-map-visualisations-in-python/

# libraries
from mpl_toolkits.basemap import Basemap
import numpy as np
import matplotlib.pyplot as plt

#my_dpi=96
#plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Always start witht the basemap function to initialize a map
m=Basemap()

# Then add element. Several elements are available: coastline:
m.drawcoastlines()
m.drawmapboundary()
m.fillcontinents()
#m.drawrivers(color='#0000ff')
plt.savefig('PNG/#281_First Basemap.png', dpi=110, bbox_inches='tight')

plt.show()




# ———————————————————————————————————
# 282 Custom appearance

# libraries
from mpl_toolkits.basemap import Basemap
import numpy as np
import matplotlib.pyplot as plt

# initialise the map
m=Basemap(llcrnrlon=-180, llcrnrlat=-60,urcrnrlon=180,urcrnrlat=70)

# Control the background color
m.drawmapboundary(fill_color='#A6CAE0', linewidth=0)

# Fill the continent
m.fillcontinents(color='grey', alpha=0.7, lake_color='grey')

# Draw the coastline
m.drawcoastlines(linewidth=0.1, color="white")

plt.savefig('PNG/#282_Custom_Basemap.png', dpi=110, bbox_inches='tight')

# Show
plt.show()





# ———————————————————————————————————
# 283 Set bounding box

# libraries
from mpl_toolkits.basemap import Basemap
import numpy as np
import matplotlib.pyplot as plt

# Control the position of the square. Give the coordinate of 2 corners
m=Basemap(llcrnrlon=-100, llcrnrlat=-58,urcrnrlon=-30,urcrnrlat=15)
m.drawmapboundary(fill_color='#A6CAE0', linewidth=0)
m.fillcontinents(color='brown', alpha=0.6, lake_color='grey')
m.drawcoastlines(linewidth=0.1, color="white")
plt.savefig('PNG/#283_Setbounding1.png', dpi=110, bbox_inches='tight')
plt.show()

# does not work
m=Basemap(lat_0=-36.5, lon_0=-75 , boundinglat=1)
m.drawmapboundary(fill_color='#A6CAE0', linewidth=0)
m.fillcontinents(color='brown', alpha=0.7, lake_color='grey')
m.drawcoastlines(linewidth=0.1, color="white")
plt.show()





# ———————————————————————————————————
# 284 Different projection of Basemap
# The default is cyl
# It is impossible to start a map without a projection.
# For certain projection, you HAVE to give other arguments

# libraries
from mpl_toolkits.basemap import Basemap
import numpy as np
import matplotlib.pyplot as plt


my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# ortho
plt.gca()
m=Basemap(lat_0=0, lon_0=0, projection='ortho' )
m.drawmapboundary(fill_color='#A6CAE0')
m.fillcontinents(color='grey', alpha=0.3)
plt.savefig('PNG/#284_Basemap_Projections1.png', dpi=96, bbox_inches='tight')
# merc
plt.gca()
m=Basemap(llcrnrlon=-180, llcrnrlat=-60,urcrnrlon=180,urcrnrlat=80, projection='merc')
m.drawmapboundary(fill_color='#A6CAE0')
m.fillcontinents(color='grey', alpha=0.3)
plt.savefig('PNG/#284_Basemap_Projections2.png', dpi=96, bbox_inches='tight')
# robin
plt.gca()
m=Basemap(lat_0=0, lon_0=0, projection='robin' )
m.drawmapboundary(fill_color='#A6CAE0')
m.fillcontinents(color='grey', alpha=0.3)
plt.savefig('PNG/#284_Basemap_Projections3.png', dpi=96, bbox_inches='tight')
#aeqd --> you HAVE to provide lon_0 and  lat_0
plt.gca()
m=Basemap(lat_0=30, lon_0=30, projection='aeqd' )
m.drawmapboundary(fill_color='#A6CAE0')
m.fillcontinents(color='grey', alpha=0.3)
plt.savefig('PNG/#284_Basemap_Projections4.png', dpi=96, bbox_inches='tight')
#nsper
plt.gca()
m=Basemap(lat_0=0, lon_0=0, projection='nsper' )
m.drawmapboundary(fill_color='#A6CAE0')
m.fillcontinents(color='grey', alpha=0.3)
plt.savefig('PNG/#284_Basemap_Projections5.png', dpi=96, bbox_inches='tight')
#cyl
plt.gca()
m=Basemap(llcrnrlon=-180, llcrnrlat=-60,urcrnrlon=180,urcrnrlat=80, projection='cyl' )
m.drawmapboundary(fill_color='#A6CAE0')
m.fillcontinents(color='grey', alpha=0.3)
plt.savefig('PNG/#284_Basemap_Projections6.png', dpi=96, bbox_inches='tight')






# ———————————————————————————————————
# 285 Use background layer

# libraries
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt


# B -- Use bluemarble
m = Basemap(llcrnrlon=-10.5,llcrnrlat=33,urcrnrlon=10.,urcrnrlat=46., resolution='i', projection='cass', lat_0 = 39.5, lon_0 = 0.)
m.bluemarble()
plt.savefig('PNG/#285_Back_Layout1.png', dpi=130, bbox_inches='tight')
plt.show()

# C -- Use shadedrelief()
m = Basemap(llcrnrlon=-10.5,llcrnrlat=33,urcrnrlon=10.,urcrnrlat=46., resolution='i', projection='cass', lat_0 = 39.5, lon_0 = 0.)
m.shadedrelief()
plt.savefig('PNG/#285_Back_Layout2.png', dpi=130, bbox_inches='tight')
plt.show()

# D -- m.etopo()
m = Basemap(llcrnrlon=-10.5,llcrnrlat=33,urcrnrlon=10.,urcrnrlat=46., resolution='i', projection='cass', lat_0 = 39.5, lon_0 = 0.)
m.etopo()
plt.savefig('PNG/#285_Back_Layout3.png', dpi=130, bbox_inches='tight')

# A -- Call arcgis: service is the layer you choose. There are several possibility: ESRI_Imagery_World_2D / World_Shaded_Relief / World_Street_Map
m = Basemap(projection='mill',llcrnrlon=-123. ,llcrnrlat=37,urcrnrlon=-121 ,urcrnrlat=39, resolution = 'l', epsg = 4326)
m.arcgisimage(service='World_Shaded_Relief', xpixels = 1500, verbose= True)
plt.savefig('PNG/#285_Back_Layout4.png', dpi=130, bbox_inches='tight')
m.arcgisimage(service='Ocean_Basemap', xpixels = 1500, verbose= True)
plt.savefig('PNG/#285_Back_Layout5.png', dpi=130, bbox_inches='tight')

# For more info
help(m.arcgisimage) 






# ———————————————————————————————————
# 286 Boundaries already in the package


# Draw world countries
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt

map = Basemap(llcrnrlon=-160, llcrnrlat=-60,urcrnrlon=160,urcrnrlat=70)
map.drawmapboundary(fill_color='#A6CAE0')
map.fillcontinents(color='#e6b800',lake_color='#e6b800')
map.drawcountries(color="white")
plt.savefig('PNG/#286_boundaries1.png', dpi=110, bbox_inches='tight')
plt.show()


# Counties and states of the USA are available
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt

map = Basemap(llcrnrlon=-130, llcrnrlat=25, urcrnrlon=-65.,urcrnrlat=52.,resolution='i', lat_0 = 40., lon_0 = -80)
map.drawmapboundary(fill_color='#A6CAE0')
map.fillcontinents(color='#e6b800',lake_color='#A6CAE0')
map.drawcounties()
plt.savefig('PNG/#286_boundaries2.png', dpi=110, bbox_inches='tight')
plt.show()

# States
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt

map = Basemap(llcrnrlon=-130, llcrnrlat=25, urcrnrlon=-65.,urcrnrlat=52.,resolution='i', lat_0 = 40., lon_0 = -80)
map.drawmapboundary(fill_color='#A6CAE0')
map.fillcontinents(color='#e6b800',lake_color='#A6CAE0')
map.drawstates()
map.drawcountries()
plt.savefig('PNG/#286_boundaries3.png', dpi=110, bbox_inches='tight')
plt.show()








# ———————————————————————————————————
# 287 Add a map scale
TODO

# States
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt

map = Basemap()
map.drawmapscale(-7., 35.8, -3.25, 39.5, 500, barstyle='fancy')
map.drawmapscale(-0., 35.8, -3.25, 39.5, 500, fontsize = 14)
help(Basemap)





# ———————————————————————————————————
# 287 Read a shapefile











# ———————————————————————————————————
# 288 Basic map with folium
# install wih 
#pip install folium


# import the library
import folium

# Make an empty map
m = folium.Map(location=[20, 0], zoom_start=3.5)

# Other tiles:
# OpenStreetMap, Stamen Terrain, Stamen Toner, Mapbox Bright, and Mapbox Control Room
m = folium.Map(location=[48.85, 2.35], tiles="Mapbox Bright", zoom_start=2)
m.save('PNG/CARTO/#288_basic_folium_map2.html')
m = folium.Map(location=[48.85, 2.35], tiles="Mapbox Control Room", zoom_start=2)
m.save('PNG/CARTO/#288_basic_folium_map3.html')
m = folium.Map(location=[48.85, 2.35], tiles="Stamen Toner", zoom_start=2)
m.save('PNG/CARTO/#288_basic_folium_map4.html')
m = folium.Map(location=[48.85, 2.35], tiles="OpenStreetMap", zoom_start=2)
m.save('PNG/CARTO/#288_basic_folium_map5.html')

# Same but with a zoom
m = folium.Map(location=[48.85, 2.35], tiles="Mapbox Bright", zoom_start=10)
m.save('PNG/CARTO/#288_basic_folium_map6.html')
m = folium.Map(location=[48.85, 2.35], tiles="Stamen Toner", zoom_start=10)
m.save('PNG/CARTO/#288_basic_folium_map7.html')
m = folium.Map(location=[48.85, 2.35], tiles="Stamen Terrain", zoom_start=10)
m.save('PNG/CARTO/#288_basic_folium_map8.html')
m = folium.Map(location=[48.85, 2.35], tiles="OpenStreetMap", zoom_start=10)
m.save('PNG/CARTO/#288_basic_folium_map9.html')













  -----------------------------------------
 |                      |
 |                      |
 |  SERIE #290 -> #300  CHLOROPLETH MAPS
 |                      |
 |                      |
  -----------------------------------------

# ———————————————————————————————————
# 290 Chloropleth map from Shapefile




# ———————————————————————————————————
# 291 Chloropleth map without shapefile= for country



# ———————————————————————————————————
# 292 Alternative: hexbin map



# ———————————————————————————————————
# 292 with FOLIUM

# We need the shape of the zones to color.
# This exist through shape files that must be converted to geojson file. Can be done here: http://ogre.adc4gis.com

# http://python-visualization.github.io/folium/docs-master/quickstart.html#Choropleth-maps

# Import libraries
import pandas as pd
import folium

# Find the original file here: https://github.com/python-visualization/folium/tree/master/examples/data
# You have to download this file and set the directory where you saved it
state_geo = os.path.join('/Users/y.holtz/Desktop/', 'us-states.json')

# Find the original file here: https://github.com/python-visualization/folium/tree/master/examples/data
state_unemployment = os.path.join('/Users/y.holtz/Desktop/', 'US_Unemployment_Oct2012.csv')
state_data = pd.read_csv(state_unemployment)

# Initialize the map:
m = folium.Map(location=[37, -102], zoom_start=4)

# Add the color for the chloropleth:
m.choropleth(
    geo_data=state_geo,
    name='choropleth',
    data=state_data,
    columns=['State', 'Unemployment'],
    key_on='feature.id',
    fill_color='YlGn',
    fill_opacity=0.7,
    line_opacity=0.2,
    legend_name='Unemployment Rate (%)'
)
folium.LayerControl().add_to(m)

# Save to html
m.save('PNG/CARTO/#292_folium_chloropleth_USA1.html')



















import json
import folium
import numpy as np


geo_str = json.dumps(json.load(open(geo_path, 'r')))
threshold_scale = np.linspace(df['2013'].min(),
                              df['2013'].max(), 6, dtype=int).tolist()


mapa = folium.Map(location=[-15.80, -47.88],
                  tiles="Mapbox Bright",
                  zoom_start=3)

mapa.geo_json(geo_str=geo_str,
              data=df,
              columns=['state', '2013'],
              fill_color='YlGn',
              key_on='feature.id',
              threshold_scale=threshold_scale)

mapa

mapa.save('PNG/CARTO/index.html')
















import pandas as pd

state_geo = os.path.join('data', 'us-states.json')

state_unemployment = os.path.join('/Users/y.holtz/Desktop/', 'US_Unemployment_Oct2012.csv')
state_data = pd.read_csv(state_unemployment)

m = folium.Map(location=[48, -102], zoom_start=3)

m.choropleth(
    geo_data=state_geo,
    name='choropleth',
    data=state_data,
    columns=['State', 'Unemployment'],
    key_on='feature.id',
    fill_color='YlGn',
    fill_opacity=0.7,
    line_opacity=0.2,
    legend_name='Unemployment Rate (%)'
)


folium.LayerControl().add_to(m)

m
















HEXBIN MAP = alternative
http://blog.kaggle.com/2016/11/30/seventeen-ways-to-map-data-in-kaggle-kernels/
import pandas as pd
import matplotlib.pyplot as plt
from mpl_toolkits.basemap import Basemap
from matplotlib import cm
%matplotlib inline
 
west, south, east, north = -74.26, 40.50, -73.70, 40.92
 
fig = plt.figure(figsize=(14,10))
ax = fig.add_subplot(111)
 
m = Basemap(projection='merc', llcrnrlat=south, urcrnrlat=north,
            llcrnrlon=west, urcrnrlon=east, lat_ts=south, resolution='i')
x, y = m(uber_data['Lon'].values, uber_data['Lat'].values)
m.hexbin(x, y, gridsize=1000,
         bins='log', cmap=cm.YlOrRd_r);

         
         
         
NICE
plt.clf()
fig = plt.figure()
ax = fig.add_subplot(111, axisbg='w', frame_on=False)

# use a blue colour ramp - we'll be converting it to a map using cmap()
cmap = plt.get_cmap('Blues')
# draw wards with grey outlines
df_map['patches'] = df_map['poly'].map(lambda x: PolygonPatch(x, ec='#555555', lw=.2, alpha=1., zorder=4))
pc = PatchCollection(df_map['patches'], match_original=True)
# impose our colour map onto the patch collection
norm = Normalize()
pc.set_facecolor(cmap(norm(df_map['jenks_bins'].values)))
ax.add_collection(pc)

# Add a colour bar
cb = colorbar_index(ncolors=len(jenks_labels), cmap=cmap, shrink=0.5, labels=jenks_labels)
cb.ax.tick_params(labelsize=6)

# Show highest densities, in descending order
highest = '\n'.join(
    value[1] for _, value in df_map[(df_map['jenks_bins'] == 4)][:10].sort().iterrows())
highest = 'Most Dense Wards:\n\n' + highest
# Subtraction is necessary for precise y coordinate alignment
details = cb.ax.text(
    -1., 0 - 0.007,
    highest,
    ha='right', va='bottom',
    size=5,
    color='#555555')

# Bin method, copyright and source data info
smallprint = ax.text(
    1.03, 0,
    'Classification method: natural breaks\nContains Ordnance Survey data\n$\copyright$ Crown copyright and database right 2013\nPlaque data from http://openplaques.org',
    ha='right', va='bottom',
    size=4,
    color='#555555',
    transform=ax.transAxes)

# Draw a map scale
m.drawmapscale(
    coords[0] + 0.08, coords[1] + 0.015,
    coords[0], coords[1],
    10.,
    barstyle='fancy', labelstyle='simple',
    fillcolor1='w', fillcolor2='#555555',
    fontcolor='#555555',
    zorder=5)
# this will set the image width to 722px at 100dpi
plt.tight_layout()
fig.set_size_inches(7.22, 5.25)
plt.savefig('data/london_plaques.png', dpi=100, alpha=True)
plt.show()
         








         





 -----------------------------------------
 |                      |
 |                      |
 |  SERIE #300 -> #310  CONNETION MAPS
 |                      |
 |                      |
  -----------------------------------------


# ———————————————————————————————————
# #300 How to draw a connection

# libraries
from mpl_toolkits.basemap import Basemap
import numpy as np
import matplotlib.pyplot as plt

# A basic map
m=Basemap(llcrnrlon=-100, llcrnrlat=20,urcrnrlon=30,urcrnrlat=70)
m.drawmapboundary(fill_color='#A6CAE0', linewidth=0)
m.fillcontinents(color='grey', alpha=0.7, lake_color='grey')
m.drawcoastlines(linewidth=0.1, color="white")

# Add a connection between new york and London
startlat = 40.78; startlon = -73.98
arrlat = 51.53; arrlon = 0.08
m.drawgreatcircle(startlon,startlat,arrlon,arrlat,linewidth=2,color='orange')
plt.savefig('PNG/#300_draw_one_connection.png', dpi=110, bbox_inches='tight')

plt.show()






# ———————————————————————————————————
# #301 Draw several connection

# libraries
from mpl_toolkits.basemap import Basemap
import numpy as np
import matplotlib.pyplot as plt

# A basic map
m=Basemap(llcrnrlon=-100, llcrnrlat=20,urcrnrlon=30,urcrnrlat=70)
m.drawmapboundary(fill_color='#A6CAE0', linewidth=0)
m.fillcontinents(color='grey', alpha=0.7, lake_color='grey')
m.drawcoastlines(linewidth=0.1, color="white")

# Make a list of connection to draw
lat=[-58, 2, 145, 30.32, -4.03, -73.57, 36.82, -38.5]
lon=[-34, 49, -38, 59.93, 5.33, 45.52, -1.29, -12.97]
name=['Buenos Aires', 'Paris', 'melbourne', 'St Petersbourg', 'Abidjan', 'Montreal', 'Nairobi', 'Salvador']



from itertools import product
pd.DataFrame(list(product(l1, l2)), columns=['l1', 'l2'])





	Buenos_aires=c(-58,-34),
	Paris=c(2,49),
	Melbourne=c(145,-38),
	Saint.Petersburg=c(30.32, 59.93),
	Abidjan=c(-4.03, 5.33),
	Montreal=c(-73.57, 45.52),
	Nairobi=c(36.82, -1.29),
	Salvador=c(-38.5, -12.97)


lat=[-58, 2, 145, 30.32, -4.03, -73.57, 36.82, -38.5]
lon=[-34, 49, -38, 59.93, 5.33, 45.52, -1.29, -12.97]

# Add a connection between new york and London
startlat = 40.78; startlon = -73.98
arrlat = 51.53; arrlon = 0.08
m.drawgreatcircle(startlon,startlat,arrlon,arrlat,linewidth=2,color='orange')
plt.savefig('PNG/#300_draw_one_connection.png', dpi=110, bbox_inches='tight')

plt.show()







# Show where is the night
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt
from datetime import datetime
map = Basemap(projection='vandg',lon_0=0,resolution='c')
map.drawmapboundary(fill_color="#7777ff")
map.fillcontinents(color="#ddaa66",lake_color="#7777ff")
map.drawcoastlines()
map.nightshade(datetime.now(), delta=0.2)
plt.show()
















  -----------------------------------------
 |                      |
 |                      |
 |  SERIE #310 -> #320  BUBBLE MAPS
 |                      |
 |                      |
  -----------------------------------------

# Repo
import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd


# ———————————————————————————————————
# #310 Basic Bubble Map

# libraries
from mpl_toolkits.basemap import Basemap
import numpy as np
import matplotlib.pyplot as plt


# Make a dots to show on the map
data = pd.DataFrame({ 
        'lat':[-58, 2, 145, 30.32, -4.03, -73.57, 36.82, -38.5],
        'lon':[-34, 49, -38, 59.93, 5.33, 45.52, -1.29, -12.97],
        'name':['Buenos Aires', 'Paris', 'melbourne', 'St Petersbourg', 'Abidjan', 'Montreal', 'Nairobi', 'Salvador']
        })
data

# A basic map
m=Basemap(llcrnrlon=-160, llcrnrlat=-75,urcrnrlon=160,urcrnrlat=80)
m.drawmapboundary(fill_color='#A6CAE0', linewidth=0)
m.fillcontinents(color='grey', alpha=0.7, lake_color='grey')
m.drawcoastlines(linewidth=0.1, color="white")

# Add a marker per city of the data frame!
m.plot(data['lat'], data['lon'], linestyle='none', marker="o", markersize=16, alpha=0.6, c="orange", markeredgecolor="black", markeredgewidth=1)
plt.savefig('PNG/#310_basic_bubblemap.png', dpi=150, bbox_inches='tight')







# ———————————————————————————————————
# #311 Custom markers
- size
- shape..
like for plot!



# Tweet file on the web
# http://python-graph-gallery.com/wp-content/uploads/TweetSurfData.csv


# Libraries
import pandas as pd
from mpl_toolkits.basemap import Basemap
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(1300/my_dpi, 900/my_dpi), dpi=my_dpi)

# read the data (on the web)
data = pd.read_csv('http://python-graph-gallery.com/wp-content/uploads/TweetSurfData.csv', sep=";")

# Make the background map
m=Basemap(llcrnrlon=-180, llcrnrlat=-70,urcrnrlon=180,urcrnrlat=70)
m.drawmapboundary(fill_color='#A6CAE0', linewidth=0)
m.fillcontinents(color='grey', alpha=0.3)
m.drawcoastlines(linewidth=0.1, color="white")

# prepare a color for each point depending on the continent.
data['labels_enc'] = pd.factorize(data['homecontinent'])[0]

# Add a point per position
m.scatter(data['homelon'], data['homelat'], s=data['n']/10, alpha=0.4, c=data['labels_enc'], cmap="Set1")

# copyright and source data info
plt.text( 
    1.03, 0,
    'Classification method: natural breaks\nContains Ordnance Survey data\n$\copyright$ Crown copyright and database right 2013\nPlaque data from http://openplaques.org',
    ha='right', va='bottom',
    size=4,
    color='#555555'
    )

#,    transform=ax.transAxes)

plt.savefig('PNG/#315_Tweet_Surf_Bubble_map1.png')

plt.show()


# Add legend
https://jonathanbright.wordpress.com/2014/08/12/point-size-legends-in-matplotlib-and-basemap-plots/







# ———————————————————————————————————
# 312 Maps with markers with folium
# install wih  #pip install folium


# import the library
import folium

# Make a data frame with dots to show on the map
data = pd.DataFrame({ 
        'lat':[-58, 2, 145, 30.32, -4.03, -73.57, 36.82, -38.5],
        'lon':[-34, 49, -38, 59.93, 5.33, 45.52, -1.29, -12.97],
        'name':['Buenos Aires', 'Paris', 'melbourne', 'St Petersbourg', 'Abidjan', 'Montreal', 'Nairobi', 'Salvador']
        })
data



# Make an empty map
m = folium.Map(location=[-15.80, -47.88], tiles="Mapbox Bright", zoom_start=4)
   
# I can add marker one by one on the map
for i in range(0,len(data)):
    folium.Marker([data.iloc[i]['lon'], data.iloc[i]['lat']], popup=data.iloc[i]['name']).add_to(m)
        
# Save it as html
m.save('PNG/CARTO/312_markers_on_folium_map1.html')

  
   








# ———————————————————————————————————
# 313 Maps with bubbles with folium
# install wih  #pip install folium


# import the library
import folium

# Make a data frame with dots to show on the map
data = pd.DataFrame({ 
        'lat':[-58, 2, 145, 30.32, -4.03, -73.57, 36.82, -38.5],
        'lon':[-34, 49, -38, 59.93, 5.33, 45.52, -1.29, -12.97],
        'name':['Buenos Aires', 'Paris', 'melbourne', 'St Petersbourg', 'Abidjan', 'Montreal', 'Nairobi', 'Salvador'],
        'value':[10,12,40,70,23,43,100,43]
        })
data

# Make an empty map
m = folium.Map(location=[-15.80, -47.88], tiles="Mapbox Bright", zoom_start=4)
   
# I can add marker one by one on the map
for i in range(0,len(data)):
    folium.Circle(
            location=[data.iloc[i]['lon'], data.iloc[i]['lat']], 
            popup=data.iloc[i]['name'],
            radius=data.iloc[i]['value']*10000,
            color='crimson',
            fill=True,
            fill_color='crimson'
    ).add_to(m)
        
# Save it as html
m.save('PNG/CARTO/313_bubble_on_folium_map1.html')


#  clustered_marker = True)

# Difference between Circle and CircleMarker.


















  -----------------------------------------
 |                      |
 |                      |
 |  SERIE #320 -> #330  NETWORK CHART
 |                      |
 |                      |
  -----------------------------------------

# Repo
import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd



# 2 main libraries: NetworkX and  graph-tool


### GRAPH TOOL
# Installation: https://git.skewed.de/count0/graph-tool/wikis/installation-instructions
# Website: https://graph-tool.skewed.de
import sys
sys.path.append('/usr/local/opt/graph-tool')
from graph_tool.all import *
--> Installation impossible relou.
    
# this is the result of csv.parse(file)
import graph_tool
g = Graph(directed=False)
list_of_edges = [['A', 'B', 50], ['A','C',34], ['C','D',55], ['D','D',80], ['A','D',90], ['B','D',78]]
vertices = {}
for e in list_of_edges:
    if e[0] not in vertices:
        vertices[e[0]] = True
    if e[1] not in vertices:
        vertices[e[1]] = True
for d in vertices:
    vertices[d] = g.add_vertex()
for edge in list_of_edges:
    g.add_edge(vertices[edge[0]], vertices[edge[1]])
    
    
    
    
    
    
    

### NETWORK X
Aller voir: http://networkx.github.io/documentation/latest/gallery.html


# ———————————————————————————————————
# 320 Network from Pandas dataframe

# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Build a dataframe with your connections
df = pd.DataFrame({ 'from':['A', 'B', 'C','A'], 'to':['D', 'A', 'E','C']}) 
df

# Build your graph
G=nx.from_pandas_dataframe(df, 'from', 'to') 

# Plot it
nx.draw(G, with_labels=True)
plt.savefig('PNG/#320_Network_start_simple.png', dpi=96)
plt.show()







# ———————————————————————————————————
# 321 Custom the appearance of your plot

# Now that you know how to do a network, you can custom it!

# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Build a dataframe with your connections
df = pd.DataFrame({ 'from':['A', 'B', 'C','A'], 'to':['D', 'A', 'E','C']}) 
df

# Build your graph
G=nx.from_pandas_dataframe(df, 'from', 'to') 

# Custom the nodes:
#nx.draw(G, with_labels=True, node_size=1500, node_color="skyblue", node_shape="s", alpha=0.5, linewidths=40)
#plt.savefig('PNG/#321_Network_custom_look1.png', dpi=96)
# see xxx for the shapes.
# linewidths = Line width of symbol border

# Custom the edges:
#nx.draw(G, with_labels=True, width=5, edge_color="skyblue",  style="solid")
#plt.savefig('PNG/#321_Network_custom_look2.png', dpi=96)
# See  xxx for the style

# Custom the node labels:
#nx.draw(G, with_labels=True, node_size=1500,  font_size=25, font_color="yellow", font_weight="bold")
#plt.savefig('PNG/#321_Network_custom_look3.png', dpi=96)

# All together we can do something fancy
nx.draw(G, with_labels=True, node_size=1500, node_color="skyblue", node_shape="o", alpha=0.5, linewidths=4,  font_size=25, font_color="grey", font_weight="bold", width=2, edge_color="grey")
plt.savefig('PNG/#321_Network_custom_look4.png', dpi=96)

     
    
       


# ———————————————————————————————————
# 322 Change layout:
    
# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Build a dataframe with your connections
df = pd.DataFrame({ 'from':['A', 'B', 'C','A','E','F','E','G','G','D','F'], 'to':['D', 'A', 'E','C','A','F','G','D','B','G','C']}) 
df

# Build your graph
G=nx.from_pandas_dataframe(df, 'from', 'to') 

# plot it
# Other = shell_layout, 
# See more with help(nx.layout)
#nx.draw(G, with_labels=True, node_size=1500, node_color="skyblue", pos=nx.fruchterman_reingold_layout(G))
#plt.title("fruchterman_reingold")
#plt.savefig('PNG/#322_Network_layout1.png', dpi=96)
#nx.draw(G, with_labels=True, node_size=1500, node_color="skyblue", pos=nx.circular_layout(G))
#plt.title("circular")
#plt.savefig('PNG/#322_Network_layout2.png', dpi=96)
#nx.draw(G, with_labels=True, node_size=1500, node_color="skyblue", pos=nx.random_layout(G))
#plt.title("random")
#plt.savefig('PNG/#322_Network_layout3.png', dpi=96)
#nx.draw(G, with_labels=True, node_size=1500, node_color="skyblue", pos=nx.spectral_layout(G))
#plt.title("spectral")
#plt.savefig('PNG/#322_Network_layout4.png', dpi=96)
nx.draw(G, with_labels=True, node_size=1500, node_color="skyblue", pos=nx.spring_layout(G))
plt.title("spring")
plt.savefig('PNG/#322_Network_layout5.png', dpi=96)







# ———————————————————————————————————
# 323 Directed or not?

# A network graph can be directed or undirected. If it is directed, there is a notion of flow between the 2 nodes. Like money goes from mister A to mister B. If it is undirected, there is just a link between the 2 nodes, like misterA end misterB are friend.

# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# DIRECTED

# Build a dataframe with your connections
# This time a pair can appear 2 times, in one side or in the other!
df = pd.DataFrame({ 'from':['D', 'A', 'B', 'C','A'], 'to':['A', 'D', 'A', 'E','C']}) 
df

# Build your graph
G=nx.from_pandas_dataframe(df, 'from', 'to', create_using=nx.DiGraph() ) 

# Custom the nodes:
plt.title("Directed")
nx.draw(G, with_labels=True, node_size=1500, alpha=0.3, arrows=True)
plt.savefig('PNG/#323_Network_direction1.png', dpi=96)

# UNDIRECTED

# Build a dataframe with your connections
# This time a pair can appear 2 times, in one side or in the other!
df = pd.DataFrame({ 'from':['D', 'A', 'B', 'C','A'], 'to':['A', 'D', 'A', 'E','C']}) 
df

# Build your graph
G=nx.from_pandas_dataframe(df, 'from', 'to', create_using=nx.Graph() ) 

# Custom the nodes:
nx.draw(G, with_labels=True, node_size=1500, alpha=0.3, arrows=True)
plt.title("UN-Directed")

plt.savefig('PNG/#323_Network_direction2.png', dpi=96)






# ———————————————————————————————————
# 324 Map a color to each node

# CONTINUOUS

# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Build a dataframe with your connections
df = pd.DataFrame({ 'from':['A', 'B', 'C','A'], 'to':['D', 'A', 'E','C']}) 
df

# And a data frame with characteristics for your nodes
carac = pd.DataFrame({ 'ID':['A', 'B', 'C','D','E'], 'myvalue':['123','25','76','12','34']  }) 
carac

# Build your graph
G=nx.from_pandas_dataframe(df, 'from', 'to', create_using=nx.Graph() ) 

# The order of the node for networkX is the following order:
G.nodes()
# Thus, we cannot give directly the 'myvalue' column to netowrkX, we need to arrange the order!

# Here is the tricky part.
# I need to assign the good color to each node
carac= carac.set_index('ID')
carac=carac.reindex(G.nodes())

# Custom the nodes:
nx.draw(G, with_labels=True, node_color=carac['myvalue'], cmap=plt.cm.Blues, node_size=1500)
plt.savefig('PNG/#324_Network_mapcolor1.png', dpi=96)


# CATEGORICAL

# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Build a dataframe with your connections
df = pd.DataFrame({ 'from':['A', 'B', 'C','A'], 'to':['D', 'A', 'E','C']}) 
df

# And a data frame with characteristics for your nodes
carac = pd.DataFrame({ 'ID':['A', 'B', 'C','D','E'], 'myvalue':['group1','group1','group2','group3','group3']  }) 
carac

# Build your graph
G=nx.from_pandas_dataframe(df, 'from', 'to', create_using=nx.Graph() ) 

# The order of the node for networkX is the following order:
G.nodes()
# Thus, we cannot give directly the 'myvalue' column to netowrkX, we need to arrange the order!

# Here is the tricky part.
# I need to assign the good color to each node
carac= carac.set_index('ID')
carac=carac.reindex(G.nodes())
# And I need to transform my categorical column in a numerical value group1->1, group2->2...
carac['myvalue']=pd.Categorical(carac['myvalue'])
carac['myvalue'].cat.codes

# Custom the nodes:
nx.draw(G, with_labels=True, node_color=carac['myvalue'].cat.codes, cmap=plt.cm.Set1, node_size=1500)
plt.savefig('PNG/#324_Network_mapcolor2.png', dpi=96)








# ———————————————————————————————————
# 325 Map a color to each edge TO DO -- ERREUR

# CONTINUOUS

# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Build a dataframe with your connections
df = pd.DataFrame({ 'from':['A', 'B', 'C','A'], 'to':['D', 'A', 'E','C'], 'value':[1, 10, 5, 5]}) 
df

# Build your graph
G=nx.from_pandas_dataframe(df, 'from', 'to', create_using=nx.Graph() ) 

# Custom the nodes:
nx.draw(G, with_labels=True, node_color='skyblue', node_size=1500, edge_color=df['value'], width=10.0, edge_cmap=plt.cm.Blues)
plt.savefig('PNG/#325_Network_mapcolorttoedge1.png', dpi=96)

# CATEGORICAL

# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Build a dataframe with your connections
df = pd.DataFrame({ 'from':['A', 'B', 'C','A'], 'to':['D', 'A', 'E','C'], 'value':['typeA', 'typeA', 'typeB', 'typeB']}) 
df

# And I need to transform my categorical column in a numerical value typeA->1, typeB->2...
df['value']=pd.Categorical(df['value'])
df['value'].cat.codes

# Build your graph
G=nx.from_pandas_dataframe(df, 'from', 'to', ['value']) 
G.nodes()
G.edges()

# Custom the nodes:
nx.draw(G, with_labels=True, node_color='skyblue', node_size=1500, edge_color=df['value'].cat.codes, width=10.0, edge_cmap=plt.cm.Set2)
plt.savefig('PNG/#325_Network_mapcolorttoedge2.png', dpi=96)






# ———————————————————————————————————
# 326 Change background color

# CONTINUOUS

# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

#my_dpi=96
#fig = plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Build a dataframe with your connections
df = pd.DataFrame({ 'from':['A', 'B', 'C','A'], 'to':['D', 'A', 'E','C'] }) 
df

# Build your graph
G=nx.from_pandas_dataframe(df, 'from', 'to', create_using=nx.Graph() ) 

# Custom the nodes:
nx.draw(G, with_labels=True, node_color='skyblue', node_size=1500, edge_color='white')
fig.set_facecolor("#00000F")

plt.savefig('PNG/#326_Network_background_color.png', dpi=96, facecolor=fig.get_facecolor() )









# ———————————————————————————————————
# 327 Network from correlation matrix.

# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

my_dpi=96
fig = plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# I build a data set: 10 individuals and 5 variables for each
ind1=[5,10,3,4,8,10,12,1,9,4]
ind5=[1,1,13,4,18,5,2,11,3,8]
df = pd.DataFrame({ 'A':ind1, 'B':ind1 + np.random.randint(10, size=(10)) , 'C':ind1 + np.random.randint(10, size=(10)) , 'D':ind1 + np.random.randint(5, size=(10)) , 'E':ind1 + np.random.randint(5, size=(10)), 'F':ind5, 'G':ind5 + np.random.randint(5, size=(10)) , 'H':ind5 + np.random.randint(5, size=(10)), 'I':ind5 + np.random.randint(5, size=(10)), 'J':ind5 + np.random.randint(5, size=(10))}) 
df

# Calculate the correlation between person. We have to transpose first, because the corr function calculate the pairwise correlations between columns.
# We also need to remove the last column since it is a categorical value.
corr = df.corr()
corr

# Transform it in a links data frame (3 columns only):
links = corr.stack().reset_index()
links.columns = ['var1', 'var2','value']
links
      
        
# Keep only correlation over a threshold and remove self correlation (cor(A,A)=1)
links_filtered=links.loc[ (links['value'] > 0.8)  & (links['var1'] != links['var2']) ]
links_filtered

# Build your graph
G=nx.from_pandas_dataframe(links_filtered, 'var1', 'var2') 

# Custom the nodes:
nx.draw(G, with_labels=True, node_color='orange', node_size=400, edge_color='black', linewidths=1,  font_size=15)
plt.savefig('PNG/#327_Network_from_correlation.png', dpi=96)




# --------- TO DO A PARTIR DE LA ----------


# ———————————————————————————————————
# 328 Network from connection adjacency matrix


# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

my_dpi=96
fig = plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# I build a data set: 10 cities, connected or not
df = pd.DataFrame(index=df.id.values, columns=df.id.values, data=(df.x1.values == df.x1.values[:,None]).astype(int))

df=pd.DataFrame( np.random.randint(2, size=(100)) , columns=['A','B'])
df        

df = pd.DataFrame(np.random.randint(10, 4), columns=['A', 'B', 'C', 'D'])     
        

ind1=[5,10,3,4,8,10,12,1,9,4]
ind5=[1,1,13,4,18,5,2,11,3,8]
df = pd.DataFrame({ 'A':ind1, 'B':ind1 + np.random.randint(2, size=(10)) , 'C':ind1 + np.random.randint(10, size=(10)) , 'D':ind1 + np.random.randint(5, size=(10)) , 'E':ind1 + np.random.randint(5, size=(10)), 'F':ind5, 'G':ind5 + np.random.randint(5, size=(10)) , 'H':ind5 + np.random.randint(5, size=(10)), 'I':ind5 + np.random.randint(5, size=(10)), 'J':ind5 + np.random.randint(5, size=(10))}) 
df


np.random.randint(2, size=(10))


# Calculate the correlation between person. We have to transpose first, because the corr function calculate the pairwise correlations between columns.
# We also need to remove the last column since it is a categorical value.
corr = df.corr()
corr

# Transform it in a links data frame (3 columns only):
links = corr.stack().reset_index()
links.columns = ['var1', 'var2','value']
links
      
        
# Keep only correlation over a threshold and remove self correlation (cor(A,A)=1)
links_filtered=links.loc[ (links['value'] > 0.8)  & (links['var1'] != links['var2']) ]
links_filtered

# Build your graph
G=nx.from_pandas_dataframe(links_filtered, 'var1', 'var2') 

# Custom the nodes:
nx.draw(G, with_labels=True, node_color='skyblue', node_size=400, edge_color='black', linewidths=1,  font_size=15)


#nx.draw(G, with_labels=True, node_size=1500, node_color="skyblue", node_shape="o", alpha=0.5, linewidths=4,  font_size=15, font_color="grey", font_weight="bold", width=2, edge_color="grey")





























# ———————————————————————————————————
# 327 Network from correlation matrix.

# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

my_dpi=96
fig = plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# bluid data set
import seaborn as sns
df = sns.load_dataset('iris')
df

# Calculate the correlation between each car. We have to transpose first, because the corr function calculate the pairwise correlations between columns.
# We also need to remove the last column since it is a categorical value.
corr = df.drop(['species'], axis=1).T.corr()
corr

# Transform it in a links data frame (3 columns only):
links = corr.stack().reset_index()
links.columns = ['var1', 'var2','value']
links
      
        
# Keep only correlation over a threshold and remove self correlation (cor(A,A)=1)
links_filtered=links.loc[ (links['value'] > 0.85)  & (links['var1'] != links['var2']) ]
links_filtered

# Build your graph
G=nx.from_pandas_dataframe(links_filtered, 'var1', 'var2') 

# Custom the nodes:
nx.draw(G, with_labels=True, node_color='skyblue', node_size=200, edge_color='black', linewidths=1,  font_size=5)


nx.draw(G, with_labels=True, node_size=1500, node_color="skyblue", node_shape="o", alpha=0.5, linewidths=4,  font_size=25, font_color="grey", font_weight="bold", width=2, edge_color="grey")





# ———————————————————————————————————
# 327 Network from correlation matrix.

# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

my_dpi=96
fig = plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# bluid data set
from ggplot import mtcars
df = mtcars.set_index('name')
del df.index.name
df

# Calculate the correlation between each car. We have to transpose first, because the corr function calculate the pairwise correlations between columns
corr = df.T.corr()
corr

# Transform it in a links data frame (3 columns only):
links = corr.stack().reset_index()
links.columns = ['var1', 'var2','value']
links
      
        
# Keep only correlation over a threshold and remove self correlation (cor(A,A)=1)
links_filtered=links.loc[ (links['value'] > 0.999)  & (links['var1'] != links['var2']) ]
links_filtered

# Build your graph
G=nx.from_pandas_dataframe(links_filtered, 'var1', 'var2') 

# Custom the nodes:
nx.draw(G, with_labels=True, node_color='skyblue', node_size=1500, edge_color='black', pos=nx.fruchterman_reingold_layout(G))

















pd.wide_to_long(corr, ["A", "Z"], i="yo", j="yi")







# build a data set
from string import ascii_letters
rs = np.random.RandomState(33)
df = pd.DataFrame(data=rs.normal(size=(100, 26)),columns=list(ascii_letters[26:]))
df


# Calculate the correlation between each letter:
corr = df.corr()
corr

# Transform it in a links data frame:
links = corr.stack().reset_index()
links.columns = ['var1', 'var2','value']
links
      
        
# Keep only correlation over a threshold and remove self correlation (cor(A,A)=1)
links_filtered=links.loc[ (links['value'] > 0.2)  & (links['var1'] != links['var2']) ]
links_filtered

# Build your graph
G=nx.from_pandas_dataframe(links_filtered, 'var1', 'var2') 

# Custom the nodes:
nx.draw(G, with_labels=True, node_color='skyblue', node_size=1500, edge_color='black', pos=nx.fruchterman_reingold_layout(G))



pd.wide_to_long(corr, ["A", "Z"], i="yo", j="yi")












# ———————————————————————————————————
# 326 Colors depends number of connections


# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Build a dataframe with your connections
df = pd.DataFrame({ 'from':['A', 'B', 'C','A'], 'to':['D', 'A', 'E','C']}) 
df

# Build your graph
G=nx.from_pandas_dataframe(df, 'from', 'to', create_using=nx.Graph() ) 

# Calculate the number of connection per node:
length = nx.shortest_path_length(G)
nodelist,hops = zip(*length.items())
hops    
# Custom the nodes:
nx.draw(G, with_labels=True, node_color=hops, cmap=plt.cm.Blues, node_size=1500)
plt.savefig('PNG/#326_Network_color_depends_number_neighbour.png', dpi=96)













G = nx.path_graph(4)
G.add_edge(5,6)
graphs = list(nx.connected_component_subgraphs(G))
graphs



#######
NICE
https://stackoverflow.com/questions/22679856/python-network-spring-layout-with-different-color-nodes
import matplotlib.pyplot as plt
import networkx as nx

G = nx.balanced_tree(2,5)
length = nx.shortest_path_length(G, source=0)
nodelist,hops = zip(*length.items())
positions = nx.graphviz_layout(G, prog='twopi', root=0)
nx.draw(G, positions, nodelist = nodelist, node_color=hops, cmap=plt.cm.Blues)
plt.axis('equal')
plt.show()




import matplotlib.pyplot as plt
import networkx as nx
import random

G = nx.gnp_random_graph(10,0.3)
for u,v,d in G.edges(data=True):
    d['weight'] = random.random()

edges,weights = zip(*nx.get_edge_attributes(G,'weight').items())

pos = nx.spring_layout(G)
nx.draw(G, pos, node_color='b', edgelist=edges, edge_color=weights, width=10.0, edge_cmap=plt.cm.Blues)
#plt.savefig('edges.png')









# ———————————————————————————————————
# xxx Weighted or not?

# Another important aspect of network graphics is to decide wether or not the connection are weighted

# libraries
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib.pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Data
a = ['A', 'A', 'A', 'C','B']
b = ['B', 'D', 'C', 'D','D']
weigth= [1, 1, 3, 1, 1]
df = pd.DataFrame({ 'from':a, 'to':b, 'weigth':weigth}) 
df

# The default one is unweighted
G=nx.from_pandas_dataframe(df=df, source='from', target='to', create_using=nx.Graph() ) 
nx.draw(G, pos=nx.spring_layout(G), arrows=True, with_labels=True, node_size=82, node_color="skyblue", node_shape="o", alpha=0.8, linewidths=13)
plt.show()


# Unirected, weighted
G=nx.from_pandas_dataframe(df=df, source='from', target='to', edge_attr=['weigth'] ) 
G['A']['B'] 
'weight']
nx.draw(G, pos=nx.spring_layout(G), arrows=True, with_labels=True, node_size=82, node_color="skyblue", node_shape="o", alpha=0.8, linewidths=13)
plt.show()
G










help(nx.draw)
help(nx.draw_networkx)

# ON a 4 classe de graphique pour 4 typ de graphiques
>>> G=nx.Graph()
>>> G=nx.DiGraph()
>>> G=nx.MultiGraph() 
>>> G=nx.MultiDiGraph()
Undirected Simple = Graph
Directed Simple = DiGraph
With Self-loops Graph = DiGraph
With Parallel edges = MultiGraph, MultiDiGraph
# 




draw(G[, pos, ax, hold])
draw_networkx(G[, pos, arrows, with_labels])
draw_networkx_nodes(G, pos[, nodelist, . . . ])
draw_networkx_edges(G, pos[, edgelist, . . . ])
draw_networkx_labels(G, pos[, labels, . . . ])
draw_networkx_edge_labels(G, pos[, . . . ])
draw_circular(G, **kwargs)
draw_random(G, **kwargs)
draw_spectral(G, **kwargs)



# Example 1
import networkx as nx
import matplotlib.pyplot as plt
G=nx.dodecahedral_graph()
nx.draw(G,pos=nx.spring_layout(G))
plt.show()


# Custom network:
import networkx as nx
import matplotlib.pyplot as plt
G=nx.dodecahedral_graph()
nx.draw(G, pos=nx.spring_layout(G), arrows=True, with_labels=True, node_size=82, node_color="skyblue", node_shape="o", alpha=0.8, linewidths=13)
plt.show()


# Change layout:
import networkx as nx
import matplotlib.pyplot as plt
G=nx.dodecahedral_graph()
nx.draw(G,pos=nx.fruchterman_reingold_layout(G))
plt.show()
circular_layout(G[, dim, scale, center])
fruchterman_reingold_layout(G[ dim, k, . . . ])
random_layout(G[, dim, scale, center])
shell_layout(G[, nlist, dim, scale, center])
spring_layout(G[, dim, k, pos, fixed, . . . ])
spectral_layout(G[, dim, weight, scale, center])


# From panda dataframe edgelist
import pandas as pd
import numpy as np
r = np.random.RandomState(seed=5)
ints = r.random_integers(1, 10, size=(3,2))
a = ['A', 'B', 'C']
b = ['D', 'A', 'E']
df = pd.DataFrame(ints, columns=['weight', 'cost']) 

df[0] = a
df['b'] = b
df

G=nx.from_pandas_dataframe(df, 0, 'b', ['weight', 'cost']) 
nx.draw(G, pos=nx.spring_layout(G), arrows=True, with_labels=True, node_size=82, node_color="skyblue", node_shape="o", alpha=0.8, linewidths=13)
plt.show()




# From adjacency matrix	
import numpy
a = numpy.reshape(numpy.random.random_integers(0,1,size=100),(10,10))
a
D = nx.DiGraph(a)
D
nx.draw(D)







#---- COMPREHENSION

import pandas as pd
import numpy as np
a = ['A', 'A', 'A', 'C','D']
b = ['B', 'C', 'C', 'D','D']
weigth= ['1', '1', '3', '1', '1']
df = pd.DataFrame({ 'from':a, 'to':b, 'weigth':weigth}) 

# Not directed, unweighted
G=nx.from_pandas_dataframe(df=df, source='from', target='to', create_using=nx.Graph() ) 
nx.draw(G, pos=nx.spring_layout(G), arrows=True, with_labels=True, node_size=82, node_color="skyblue", node_shape="o", alpha=0.8, linewidths=13)
plt.show()

# Directed, unweighted
G=nx.from_pandas_dataframe(df=df, source='from', target='to', create_using=nx.DiGraph() ) 
nx.draw(G, pos=nx.spring_layout(G), arrows=True, with_labels=True, node_size=82, node_color="skyblue", node_shape="o", alpha=0.8, linewidths=13)
plt.show()

# Unirected, weighted
G=nx.from_pandas_dataframe(df=df, source='from', target='to', create_using=nx.MultiGraph(), edge_attr="weigth" ) 
nx.draw(G, pos=nx.spring_layout(G), arrows=True, with_labels=True, node_size=82, node_color="skyblue", node_shape="o", alpha=0.8, linewidths=13)
plt.show()

# Directed, weighted
G=nx.from_pandas_dataframe(df=df, source='from', target='to', create_using=nx.MultiDiGraph() ) 
nx.draw(G, pos=nx.spring_layout(G), arrows=True, with_labels=True, node_size=82, node_color="skyblue", node_shape="o", alpha=0.8, linewidths=13)
plt.show()













  -----------------------------------------
 |											|
 |											|
 |  SERIE #330 -> #340 ABOUT PANDAS
 |											|
 |											|
  -----------------------------------------



http://pandas.pydata.org

citation: 
pandas is a library providing high-performance, easy-to-use data structures and data analysis tools for the Python programming language.
It aims to be the fundamental high-level building block for doing practical, real world data analysis in Python
data manipulation and analysis
Mostly used for data manipulation. But can also be used for dataviz.
A few example.
8 resources to learn pandas: http://www.dataschool.io/best-python-pandas-resources/

Absolutely unavoidable if you do data science in python.





  -----------------------------------------
 |											|
 |											|
 |  SERIE #340 -> #350 ANIMATION
 |											|
 |											|
  -----------------------------------------


import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd



# ———————————————————————————————————
# 340 Basic animation

# libraries
import matplotlib.pyplot as plt
import seaborn as sns
my_dpi=96

# I build a data set: 10 individuals and 5 variables for each
for i in range(0,10):
    fig = plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)
    plt.scatter(i, i*i, s=40+i*600, alpha=0.5, edgecolors="grey", linewidth=2)
    plt.xlim(0, 10)
    plt.ylim(0, 100)
    filename='PNG/ANIMATION/step'+str(i)+'.png'
    plt.savefig(filename, dpi=96)
    plt.gca()
  

# Then use image magick (this is bash, not python)
convert -delay 80 *.png animated_chart.gif








# ———————————————————————————————————
# 341 GAPMINDER


# libraries
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
sns.set_style("white")
import pandas as pd
my_dpi=96

# Get the data (csv file is hosted on the web)
url = 'https://python-graph-gallery.com/wp-content/uploads/gapminderData.csv'
data = pd.read_csv(url)

# And I need to transform my categorical column (continent) in a numerical value group1->1, group2->2...
data['continent']=pd.Categorical(data['continent'])
 
# For each year:
for i in data.year.unique():

    # initialize a figure
    fig = plt.figure(figsize=(680/my_dpi, 480/my_dpi), dpi=my_dpi)
    
    # Change color with c and alpha. I map the color to the X axis value.
    tmp=data[ data.year == i ]
    plt.scatter(tmp['lifeExp'], tmp['gdpPercap'] , s=tmp['pop']/200000 , c=tmp['continent'].cat.codes, cmap="Accent", alpha=0.6, edgecolors="white", linewidth=2)

    # Add titles (main and on axis)
    plt.yscale('log')
    plt.xlabel("Life Expectancy")
    plt.ylabel("GDP per Capita")
    plt.title("Year: "+str(i) )
    plt.ylim(0,100000)
    plt.xlim(30, 90)

    # Save it
    filename='PNG/ANIMATION/Gapminder_step'+str(i)+'.png'
    plt.savefig(filename, dpi=96)
    plt.gca()

# Then use image magick (this is bash, not python)
convert -delay 80 Gapminder*.png animated_gapminder.gif










# ———————————————————————————————————
# 342 VOLCANO 3D

# Let's animate the volcano 3D presented in the 3D section

# library
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Get the data (csv file is hosted on the web)
url = 'https://python-graph-gallery.com/wp-content/uploads/volcano.csv'
data = pd.read_csv(url)

# Transform it to a long format
df=data.unstack().reset_index() 
df.columns=["X","Y","Z"]

# And transform the old column name in something numeric
df['X']=pd.Categorical(df['X'])
df['X']=df['X'].cat.codes

# We are going to do 20 plots, for 20 different angles
for angle in range(70,210,2):
    
    # Make the plot
    fig = plt.figure()
    ax = fig.gca(projection='3d')
    ax.plot_trisurf(df['Y'], df['X'], df['Z'], cmap=plt.cm.viridis, linewidth=0.2)
    
    # Set the angle of the camera
    ax.view_init(30,angle)
 
    # Save it
    filename='PNG/ANIMATION/Volcano_step'+str(angle)+'.png'
    plt.savefig(filename, dpi=96)
    plt.gca()   
    
# Then use image magick (this is bash, not python)
convert -delay 50 Volcano*.png animated_volcano.gif





  -----------------------------------------
 |											|
 |											|
 |  SERIE #350 -> #360 PLOTLY
 |											|
 |											|
  -----------------------------------------

# install with pip install plotly
# see https://plot.ly/matplotlib/getting-started/

# READ THIS
# http://nbviewer.jupyter.org/github/plotly/python-user-guide/blob/master/s6_matplotlylib/s6_matplotlylib.ipynb
# Explain everything about transition from matplotlib to plotly
# And an example here:
  
http://nbviewer.jupyter.org/github/etpinard/plotly-misc-nbs/blob/etienne/dataviz.ipynb

  
# Matplotlib
import matplotlib.pyplot as plt
import numpy as np

# Plotly
import plotly.plotly as py
import plotly.tools as tls


## Generating the data..
x =  np.linspace(np.pi, 3*np.pi, 1000)
sinx = np.sin(x)
logx = np.log(x)

fig = plt.figure()
ax = fig.add_subplot(111)
ax.plot(x, sinx)
ax.set_title('A Sine Curve')

py.iplot_mpl(fig, file_id="toto")




plotly_fig = tls.mpl_to_plotly(mpl_fig)
plotly_fig








import plotly.plotly as py
from plotly.graph_objs import *
import plotly.tools as tls
import numpy as np
import pandas as pd
import math
import matplotlib.mlab as mlab
%matplotlib inline


un='IPython.Demo'; k='1fw3zw2o13'; py.sign_in(un,k);




                                             
                                             
  -----------------------------------------
 |											|
 |											|
 |  SERIE #370 -> #380 3D plots
 |											|
 |											|
  -----------------------------------------



import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd

#-------------------------------








# ———————————————————————————————————
# 370 3D SCATTERPLOT

# libraries
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Dataset
df=pd.DataFrame({'X': range(1,101), 'Y': np.random.randn(100)*15+range(1,101), 'Z': (np.random.randn(100)*15+range(1,101))*2 })
 
# plot
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
ax.scatter(df['X'], df['Y'], df['Z'], c='skyblue', s=60)
ax.view_init(30, 185)

plt.savefig('PNG/#370_3D_scatterplot.png', dpi=96)













# ———————————————————————————————————
# 371 SURFACE PLOT

#.plot_surface() takes 2D arrays as inputs, not 1D DataFrame columns, thus we are going to use plot_trisurf
# Topographic Information on Auckland's Maunga Whau Volcano         
         
    
# library
from mpl_toolkits.mplot3d import Axes3D
import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Get the data (csv file is hosted on the web)
url = 'https://python-graph-gallery.com/wp-content/uploads/volcano.csv'
data = pd.read_csv(url)

# Transform it to a long format
df=data.unstack().reset_index() 
df.columns=["X","Y","Z"]

# And transform the old column name in something numeric
df['X']=pd.Categorical(df['X'])
df['X']=df['X'].cat.codes

# Make the plot
fig = plt.figure()
ax = fig.gca(projection='3d')
#ax.plot_trisurf(df['Y'], df['X'], df['Z'], cmap=plt.cm.viridis, linewidth=0.2)
#plt.savefig('PNG/#371_3D_Surface_plot_volcano_1.png')

# Add a color bar which maps values to colors.
surf=ax.plot_trisurf(df['Y'], df['X'], df['Z'], cmap=plt.cm.viridis, linewidth=0.2)
fig.colorbar( surf, shrink=0.5, aspect=5)
plt.savefig('PNG/#371_3D_Surface_plot_volcano_2.png')

# Rotate it
#ax.view_init(30, 45)
#plt.savefig('PNG/#371_3D_Surface_plot_volcano_3.png')

# Other palette
ax.plot_trisurf(df['Y'], df['X'], df['Z'], cmap=plt.cm.jet, linewidth=0.01)
plt.savefig('PNG/#371_3D_Surface_plot_volcano_4.png')








# ———————————————————————————————————
# 372 Display 3D PCA result

# http://blog.nextgenetics.net/?e=42

# libraries
import pandas as pd
import numpy as np
from sklearn.decomposition import PCA

# Get the iris dataset
import seaborn as sns
sns.set_style("white")
df = sns.load_dataset('iris')

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Keep the 'specie' column appart + make it numeric for coloring
df['species']=pd.Categorical(df['species'])
my_color=df['species'].cat.codes
df = df.drop('species', 1)

# Run The PCA
pca = PCA(n_components=3)
pca.fit(df)

# Store results of PCA in a data frame
result=pd.DataFrame(pca.transform(df), columns=['PCA%i' % i for i in range(3)], index=df.index)

# Plot initialisation
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
ax.scatter(result['PCA0'], result['PCA1'], result['PCA2'], c=my_color, cmap="Set2_r", s=60)

# make simple, bare axis lines through space:
xAxisLine = ((min(result['PCA0']), max(result['PCA0'])), (0, 0), (0,0))     
ax.plot(xAxisLine[0], xAxisLine[1], xAxisLine[2], 'r') 
yAxisLine = ((0, 0), (min(result['PCA1']), max(result['PCA1'])), (0,0)) 
ax.plot(yAxisLine[0], yAxisLine[1], yAxisLine[2], 'r') 
zAxisLine = ((0, 0), (0,0), (min(result['PCA2']), max(result['PCA2']))) 
ax.plot(zAxisLine[0], zAxisLine[1], zAxisLine[2], 'r') 
 
# label the axes 
ax.set_xlabel("PC1") 
ax.set_ylabel("PC2")
ax.set_zlabel("PC3")
ax.set_title("PCA on the iris data set")
#plt.show() 

plt.savefig('PNG/#372_3D_PCA_result.png')





                                             
                                             
  -----------------------------------------
 |											|
 |											|
 |  SERIE #380 -> #390 BARPLOTS SEABORN
 |											|
 |											|
  -----------------------------------------





# ———————————————————————————————————
# 380 Basic Barplot


# ----- INPUT1 = one value per group

# library
import seaborn as sns
import pandas as pd

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

#data
df = pd.DataFrame({'groups': ['A','B','C','D','E'], 'value': [5, 15, 5, 10, 15]})

# Barplot
sns.barplot(x="groups", y="value", data=df)

plt.savefig('PNG/#380_basic_barplot_seaborn1.png', dpi=96)




# ----- INPUT2 = several values / group

# libraries
import seaborn as sns

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Dataset
sns.set_style("white")
df = sns.load_dataset('iris')

# BAsic barplot
sns.barplot(x="species", y="sepal_length", data=df)

plt.savefig('PNG/#380_basic_barplot_seaborn2.png', dpi=96)







# ———————————————————————————————————
# 381 Basic Grouped Barplot

# - 3 different formats are possible
    
# library
import seaborn as sns
import pandas as pd

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

#data
df = pd.DataFrame({'groups': ['A','A','B','B','C','C','D','D'], 'subgroup': ['sub1','sub2','sub1','sub2','sub1','sub2','sub1','sub2'], 'value': [ 5, 10, 15, 2, 10, 11, 12, 3]})

# Barplot
sns.barplot(x="groups", y="value", hue="subgroup", data=df)

plt.savefig('PNG/#380_basic_barplot_seaborn1.png', dpi=96)


--> No easy way to stack them...













  -----------------------------------------
 |											|
 |											|
 |  SERIE #390 -> #400 SPIDER PLOT
 |											|
 |											|
  -----------------------------------------

    
# Repo
import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd




# ———————————————————————————————————
# 390 Basic Radar plot

# Libraries
import matplotlib.pyplot as plt
import pandas as pd
from math import pi

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)


# Set data
df = pd.DataFrame({
    'group': ['A','B','C','D'],
	'var1': [38, 1.5, 30, 4], 
	'var2': [29, 10, 9, 34], 
	'var3': [8, 39, 23, 24], 
	'var4': [7, 31, 33, 14], 
	'var5': [28, 15, 32, 14]
	})
    
# number of variable
categories=list(df)[1:]
N = len(categories)

# We are going to plot the first line of the data frame.
# But we need to repeat the first value to close the circular graph:
values=df.loc[0].drop('group').values.flatten().tolist()
values += values[:1]
values

# What will be the angle of each axis in the plot? (we divide the plot / number of variable)
angles = [n / float(N) * 2 * pi for n in range(N)]
angles += angles[:1]

# Initialise the spider plot
ax = plt.subplot(111, polar=True)

# Draw one axe per variable + add labels labels yet
plt.xticks(angles[:-1], categories, color='grey', size=8)

# Draw ylabels
ax.set_rlabel_position(0)
plt.yticks([10,20,30], ["10","20","30"], color="grey", size=7)
plt.ylim(0,40)

# Plot data
ax.plot(angles, values, linewidth=1, linestyle='solid')

# Fill area
ax.fill(angles, values, 'b', alpha=0.1)

# save as png
plt.savefig('PNG/#390_basic_Radarchart.png', dpi=96)

            
           
            
            





# ———————————————————————————————————
# 391 Radar with several individuals

# Libraries
import matplotlib.pyplot as plt
import pandas as pd
from math import pi

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Set data
df = pd.DataFrame({
    'group': ['A','B','C','D'],
	'var1': [38, 1.5, 30, 4], 
	'var2': [29, 10, 9, 34], 
	'var3': [8, 39, 23, 24], 
	'var4': [7, 31, 33, 14], 
	'var5': [28, 15, 32, 14]
	})

# ------- PART 1: Create background

    
# number of variable
categories=list(df)[1:]
N = len(categories)

# What will be the angle of each axis in the plot? (we divide the plot / number of variable)
angles = [n / float(N) * 2 * pi for n in range(N)]
angles += angles[:1]

# Initialise the spider plot
ax = plt.subplot(111, polar=True)

# If you want the first axis to be on top:
ax.set_theta_offset(pi / 2)
ax.set_theta_direction(-1)

# Draw one axe per variable + add labels labels yet
plt.xticks(angles[:-1], categories)

# Draw ylabels
ax.set_rlabel_position(0)
plt.yticks([10,20,30], ["10","20","30"], color="grey", size=7)
plt.ylim(0,40)

# ------- PART 2: Add plots

# Plot each individual = each line of the data
# I don't do a loop, because plotting more than 3 groups makes the chart unreadable

# Ind1
values=df.loc[0].drop('group').values.flatten().tolist()
values += values[:1]
ax.plot(angles, values, linewidth=1, linestyle='solid', label="group A")
ax.fill(angles, values, 'b', alpha=0.1)

# Ind2
values=df.loc[1].drop('group').values.flatten().tolist()
values += values[:1]
ax.plot(angles, values, linewidth=1, linestyle='solid', label="group B")
ax.fill(angles, values, 'r', alpha=0.1)

# Add legend
plt.legend(loc='upper right', bbox_to_anchor=(0.1, 0.1))

# save as png
plt.savefig('PNG/#391_Several_indiv_Radarchart.png', dpi=96, bbox_inches='tight')
        
            
            
    
            
            
            
            
            
            
            
            

# ———————————————————————————————————
# 392 Use faceting for radar charts

# Libraries
import matplotlib.pyplot as plt
import pandas as pd
from math import pi


# Set data
df = pd.DataFrame({
    'group': ['A','B','C','D'],
	'var1': [38, 1.5, 30, 4], 
	'var2': [29, 10, 9, 34], 
	'var3': [8, 39, 23, 24], 
	'var4': [7, 31, 33, 14], 
	'var5': [28, 15, 32, 14]
	})

    
    
    
# ------- PART 1: Define a function that do a plot for one line of the dataset!

def make_spider( row, title, color):
    
    # number of variable
    categories=list(df)[1:]
    N = len(categories)

    # What will be the angle of each axis in the plot? (we divide the plot / number of variable)
    angles = [n / float(N) * 2 * pi for n in range(N)]
    angles += angles[:1]

    # Initialise the spider plot
    ax = plt.subplot(2,2,row+1, polar=True, )

    # If you want the first axis to be on top:
    ax.set_theta_offset(pi / 2)
    ax.set_theta_direction(-1)

    # Draw one axe per variable + add labels labels yet
    plt.xticks(angles[:-1], categories, color='grey', size=8)

    # Draw ylabels
    ax.set_rlabel_position(0)
    plt.yticks([10,20,30], ["10","20","30"], color="grey", size=7)
    plt.ylim(0,40)

    # Ind1
    values=df.loc[row].drop('group').values.flatten().tolist()
    values += values[:1]
    ax.plot(angles, values, color=color, linewidth=2, linestyle='solid')
    ax.fill(angles, values, color=color, alpha=0.4)

    # Add a title
    plt.title(title, size=11, color=color, y=1.1)




# ------- PART 2: Apply to all individuals
# initialize the figure
my_dpi=96
plt.figure(figsize=(1000/my_dpi, 1000/my_dpi), dpi=my_dpi)

# Create a color palette:
my_palette = plt.cm.get_cmap("Set2", len(df.index))

# Loop to plot
for row in range(0, len(df.index)):    
    make_spider( row=row, title='group '+df['group'][row], color=my_palette(row))

# save as png
plt.savefig('PNG/#393_Faceting_and_Radarchart2.png', dpi=96, bbox_inches='tight')
        

            
            
            
            
            




  -----------------------------------------
 |											|
 |											|
 |  SERIE #400 -> #410 TREE DIAGRAM / DENDROGRAM
 |											|
 |											|
  -----------------------------------------

# BAD CHART:
# - Categorical or Diverging palette for heatmap See http://www.kdnuggets.com/2016/03/4-lessons-brilliant-data-visualization.html
# - 

A dendrogram (from Greek dendro "tree" and gramma "drawing") is a tree diagram frequently used to illustrate the arrangement of the clusters produced by hierarchical clustering.[1] Dendrograms are often used in computational biology to illustrate the clustering of genes or samples, sometimes on top of heatmaps.



# Repo
import os
os.chdir("/Users/y.holtz/Dropbox/Python_GG")
cwd = os.getcwd()
cwd







# ———————————————————————————————————
# 400 Basic Dendrogram

# Libraries
import pandas as pd
from matplotlib import pyplot as plt
from scipy.cluster.hierarchy import dendrogram, linkage
import numpy as np

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Data set
url = 'https://python-graph-gallery.com/wp-content/uploads/mtcars.csv'
df = pd.read_csv(url)
df = df.set_index('model')
del df.index.name
df

# Calculate the distance between each sample
# You have to think:

# - METHOD ?
# How to calculate the distance between 2 groups.

# - METRIC ?
# how to calculate the distance between each pair? # Euclidean distance? Or correlation?
# Normalize it or not
# Doc: http://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.linkage.html
Z = linkage(df, 'ward')
Z

# Make the dendrogram
plt.title('Hierarchical Clustering Dendrogram')
plt.xlabel('sample index')
plt.ylabel('distance (Ward)')
dendrogram(Z, labels=df.index, leaf_rotation=90)

plt.savefig('PNG/#400_Basic_Dendrogram.png', dpi=96, bbox_inches='tight')





            
            
# ———————————————————————————————————
# 401 Dendrogram customizations

# Libraries
import pandas as pd
from matplotlib import pyplot as plt
from scipy.cluster import  hierarchy
import numpy as np

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Data set
url = 'https://python-graph-gallery.com/wp-content/uploads/mtcars.csv'
df = pd.read_csv(url)
df = df.set_index('model')
del df.index.name
df

# Calculate the distance between each sample
Z = hierarchy.linkage(df, 'ward')
Z

# Custom leaves
#hierarchy.dendrogram(Z, leaf_rotation=90, leaf_font_size=8, labels=df.index)
#plt.savefig('PNG/#401_custom_Dendrogram1.png', dpi=96, bbox_inches='tight')

# Control number of clusters
hierarchy.dendrogram(Z, color_threshold=240)
plt.axhline(y=240, c='grey', lw=1, linestyle='dashed')
plt.savefig('PNG/#401_custom_Dendrogram2.png', dpi=96, bbox_inches='tight')

# Control color palette used for cluster
#my_palette = plt.cm.get_cmap("Set1", 3)
hierarchy.set_link_color_palette(['#b30000','#996600', '#b30086'])
hierarchy.dendrogram(Z, color_threshold=240, above_threshold_color='grey')
plt.axhline(y=240, c='grey', lw=1, linestyle='dashed')
plt.savefig('PNG/#401_custom_Dendrogram3.png', dpi=96, bbox_inches='tight')


# Truncate the dendrogram
hierarchy.dendrogram(Z, truncate_mode = 'lastp', p=4 ) # -> you will have 4 leaf at the bottom of the plot
plt.savefig('PNG/#401_custom_Dendrogram4.png', dpi=96, bbox_inches='tight')
hierarchy.dendrogram(Z, truncate_mode = 'level', p=2)  # ->  No more than ``p`` levels of the dendrogram tree are displayed.
plt.savefig('PNG/#401_custom_Dendrogram5.png', dpi=96, bbox_inches='tight')


# Orientation of the dendrogram
hierarchy.dendrogram(Z, orientation="right", labels=df.index)
plt.savefig('PNG/#401_custom_Dendrogram6.png', dpi=96, bbox_inches='tight')
hierarchy.dendrogram(Z, orientation="left", labels=df.index)
plt.savefig('PNG/#401_custom_Dendrogram7.png', dpi=96, bbox_inches='tight')

            


            
            




# ———————————————————————————————————
# 402 Custom leaf label in dendrogram

# Often we want to compare the cluster we observe with the cluster we expect.
# To do so, we can color the labels with the cluster we expect:

# Libraries
import pandas as pd
from matplotlib import pyplot as plt
from scipy.cluster.hierarchy import dendrogram, linkage
import numpy as np

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Data set
url = 'https://python-graph-gallery.com/wp-content/uploads/mtcars.csv'
df = pd.read_csv(url)
df = df.set_index('model')
del df.index.name
df

# Calculate the distance between each sample
Z = linkage(df, 'ward')
Z

# Make the dendro
dendrogram(Z, labels=df.index, leaf_rotation=0, orientation="left", color_threshold=240, above_threshold_color='grey')
           
# Create a color palette with 3 color for the 3 cyl possibilities
my_palette = plt.cm.get_cmap("Accent", 3)

# 
df['cyl']=pd.Categorical(df['cyl'])
my_color=df['cyl'].cat.codes

# Apply the right color to each label
ax = plt.gca()
xlbls = ax.get_ymajorticklabels()
num=-1
for lbl in xlbls:
    num+=1
    val=my_color[num]
    lbl.set_color(my_palette(val))

plt.savefig('PNG/#402_leaf_labal_color.png', dpi=96, bbox_inches='tight')








# ———————————————————————————————————
# 403 Highly customized dendrogram
    
    
    
            






# ———————————————————————————————————
# 404 Dendro + Heatmap

see http://seaborn.pydata.org/generated/seaborn.clustermap.html

# Libraries
import seaborn as sns
import pandas as pd
from matplotlib import pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Data set
url = 'https://python-graph-gallery.com/wp-content/uploads/mtcars.csv'
df = pd.read_csv(url)
df = df.set_index('model')
del df.index.name
df

# Default plot
sns.clustermap(df)
plt.savefig('PNG/#404_Dendro_and_heatmap1.png', dpi=96, bbox_inches='tight')
# Here we have a problem: disp and hp have values way higher than other variable. So every
# other variable appear to be black, because they are so small compared to disp and hp.
# To avoid that we need to normalize or standardize our data:

# Standardize or Normalize every column
# Standardize:
sns.clustermap(df, standard_scale=1)
plt.savefig('PNG/#404_Dendro_and_heatmap2.png', dpi=96, bbox_inches='tight')
# Normalize
sns.clustermap(df, z_score=1)
plt.savefig('PNG/#404_Dendro_and_heatmap3.png', dpi=96, bbox_inches='tight')

# OK now we can compare our individuals. But how do you determine the similarity between 2 cars?
# Several way to calculate that. the 2 most common ways are: correlation and euclidean distance?
sns.clustermap(df, metric="correlation", standard_scale=1)
plt.savefig('PNG/#404_Dendro_and_heatmap4.png', dpi=96, bbox_inches='tight')
sns.clustermap(df, metric="euclidean", standard_scale=1)
plt.savefig('PNG/#404_Dendro_and_heatmap5.png', dpi=96, bbox_inches='tight')
# It is a really important choice. See https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.distance.pdist.html for more info.

# OK now we determined the distance between 2 individuals. But how to do the clusterisation? Several methods exist. 
# Here are 2 examples. See https://docs.scipy.org/doc/scipy/reference/generated/scipy.cluster.hierarchy.linkage.html for more information.
# If you have no idea, ward is probably a good start.
sns.clustermap(df, metric="euclidean", standard_scale=1, method="single")
plt.savefig('PNG/#404_Dendro_and_heatmap6.png', dpi=96, bbox_inches='tight')
sns.clustermap(df, metric="euclidean", standard_scale=1, method="ward")
plt.savefig('PNG/#404_Dendro_and_heatmap7.png', dpi=96, bbox_inches='tight')

# CHange color palette
sns.clustermap(df, metric="euclidean", standard_scale=1, method="ward", cmap="mako")
plt.savefig('PNG/#404_Dendro_and_heatmap8.png', dpi=96, bbox_inches='tight')
sns.clustermap(df, metric="euclidean", standard_scale=1, method="ward", cmap="viridis")
plt.savefig('PNG/#404_Dendro_and_heatmap9.png', dpi=96, bbox_inches='tight')
sns.clustermap(df, metric="euclidean", standard_scale=1, method="ward", cmap="Blues")
plt.savefig('PNG/#404_Dendro_and_heatmap10.png', dpi=96, bbox_inches='tight')

# Ignore outliers
# Let's create an outlier in the dataset:
df.drat[15]=1000
sns.clustermap(df,  robust=True)
plt.savefig('PNG/#404_Dendro_and_heatmap11.png', dpi=96, bbox_inches='tight')
sns.clustermap(df,  robust=False)
plt.savefig('PNG/#404_Dendro_and_heatmap12.png', dpi=96, bbox_inches='tight')









# ———————————————————————————————————
# 404 Dendro + Heatmap with colored labels

see http://seaborn.pydata.org/generated/seaborn.clustermap.html

# Libraries
import seaborn as sns
import pandas as pd
from matplotlib import pyplot as plt

my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Data set
url = 'https://python-graph-gallery.com/wp-content/uploads/mtcars.csv'
df = pd.read_csv(url)
df = df.set_index('model')
df


# Prepare a vector of color mapped to the 'cyl' column
my_palette = dict(zip(df.cyl.unique(), ["orange","yellow","brown"]))
row_colors = df.cyl.map(my_palette)

# plot
sns.clustermap(df, metric="correlation", method="single", cmap="Blues", standard_scale=1,  row_colors=row_colors)
plt.savefig('PNG/#405_Dendro_and_heatmap_and_rowcolor.png', dpi=96, bbox_inches='tight')









            
            
            
            


  -----------------------------------------
 |											|
 |											|
 |  SERIE #410 -> #420 CIRCLE PACKING OR CIRCULAR TREEMAP
 |											|
 |											|
  -----------------------------------------


Although circle packing is not as space-efficient as a treemap, it better reveals the hierarchy.

Some of
these uses enclosure and position rather than edges to communicate relations

While the bubbles are flashy and are fun to watch move around, they may not be the best visual form to display your information in. In most cases, when bubbles are used to encode a single variable, the two dimensional bubble inflates and obscures the one dimensional value it is attempting to display.























