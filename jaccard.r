library('cluster')
library('openxlsx')
library('xtable')
library('clusteval')
library('vegan')
args <- commandArgs()
print(args)
n <- as.numeric(args[7])
df <- na.omit(openxlsx::read.xlsx(args[6], sheet = n))

df[,1] <- NULL
df[,1] <- NULL
row.names(df) <- df[,1]
df[,1] <- NULL

df <- t(df)


d <- vegdist(df, method = "jaccard"); d
fit <- hclust(d, method = "single")
plot(fit, labels=rownames(data), ylab='Jaccard Index', xlab = ' ',cex=0.5, main = 'Cluster dendrogram, Jaccard index')
abline(h = 0.5)
