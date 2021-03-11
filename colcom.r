library('openxlsx')
args <- commandArgs()
n <- as.numeric(args[7])
df <- openxlsx::read.xlsx(args[6], sheet = n)
names(df) <- df[1,]
for (i in names(df)) {
  print(i)
}