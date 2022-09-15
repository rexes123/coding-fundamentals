class Calculator {
    constructor(num) {
        this.operation = []
        this.num = num
    }

    value() {
        for (const operation of this.operation) {
            const { leftOperand, operator, rightOperand, result } = operation

            console.log(`${leftOperand} ${operator} ${rightOperand} = ${result}`)
        }
    }

add(numToAdd) {
    const oldValue = this.num
    const newValue = oldValue + numToAdd
    this.num = newValue

    this.operation.push({
        leftOperand: oldValue,
        operator: '+',
        rightOperand: numToAdd,
        result: newValue,
    })

    return this
}

subtract(numToSubstract) {
    const oldValue = this.num
    const newValue = oldValue - numToSubstract
    this.num = newValue

    this.operation.push({
        leftOperand: oldValue,
        operator: '-',
        rightOperand: numToSubstract,
        result: newValue,
    })

    return this
}

multiply(numToMultiply) {
    const oldValue = this.num
    const newValue = oldValue * numToMultiply
    this.num = newValue


    this.operation.push({
        leftOperand: oldValue,
        operator: 'x',
        rightOperand: numToMultiply,
        result: newValue,
    })

    return this
}

divide(numToDivide) {
    const oldValue = this.num
    const newValue = oldValue / numToDivide
    this.num = newValue

    this.operation.push({
        leftOperand: oldValue,
        operator: '/',
        rightOperand: numToDivide,
        result: newValue,
    })

    return this
}
}


const calculator = new Calculator(0)

calculator.add(5).subtract(3).multiply(6).divide(3)

calculator.value()
