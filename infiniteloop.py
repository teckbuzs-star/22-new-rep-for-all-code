def factorial(number: int) -> int:
    result = 1
    for value in range(1, number + 1):
        result *= value
    return result


try:
    number = int(input("Enter a non-negative integer: "))
    if number < 0:
        print("Please enter a non-negative integer.")
    else:
        print(f"{number}! = {factorial(number)}")
except ValueError:
    print("Invalid input. Please enter a whole number.")