library('openxlsx')
library('xtable')
args <- commandArgs()
as.numeric(args[8],args[9])
t <- openxlsx::read.xlsx(args[6])
a <- cor.test(x = t[[args[8]]], y = t[[args[9]]])
print(a)
