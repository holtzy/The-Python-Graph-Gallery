
		# ------------------------------------------------ #
		# ------- THE PYTHON_GRAPH_GALLERY
		# ------------------------------------------------ #

 
 
--

# ------------------------------------------------------------------------------------------------------------------------------------------------------------
# GRAPH #1: BASIC BARPLOT 
# ------------------------------------------------------------------------------------------------------------------------------------------------------------

 
# Get librairies
import numpy as np
import matplotlib.pyplot as plt

# Open a new plot
fig = plt.figure()
my_dpi=96
plt.figure(figsize=(480/my_dpi, 480/my_dpi), dpi=my_dpi)

# Make data
ind = (1,2,3,4,5)
val = (10,14,32,22,10)

# Make plot
plt.bar(ind, val, width=0.3)

#plt.show()

# Save
plt.savefig("#1_Basic_Boxplot.png")



plt.xticks(ind + width / 2, OX)




# Make data
N = 5
men_means = (20, 35, 30, 35, 27)
 
 
ind = np.arange(N)  # the x locations for the groups
width = 0.35       # the width of the bars


fig, ax = plt.subplots()
rects1 = ax.bar(ind, men_means, width, color='r')

plt.show()
 
# ------------------------------------------------------------------------------------------------------------------------------------------------------------

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 