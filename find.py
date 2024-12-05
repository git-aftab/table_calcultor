# Write a function that generates a specific table upto the given range

#Method 1 --------------------------

def tableCalculator(x,y):
    for i in range(1,y+1):
        table = x*i
        print(f"{x} * {i} = {table}")

a = int(input("Table of:"))
b = int(input("Table till:"))
tableCalculator(a,b)

print("-------------------------------------")
#Method 2 -------------------------------------

def tableCalculator2(x,y):
    for i in range(1,int(y)+1):
         print(f"{x} * {i} = {x * i}")

tableCalculator2(5,10)