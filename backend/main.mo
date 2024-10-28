import Text "mo:base/Text";

import Float "mo:base/Float";
import Error "mo:base/Error";

actor Calculator {
    public func calculate(num1: Float, op: Text, num2: Float) : async Float {
        switch (op) {
            case "+" { num1 + num2 };
            case "-" { num1 - num2 };
            case "*" { num1 * num2 };
            case "/" {
                if (num2 == 0) {
                    throw Error.reject("Division by zero");
                };
                num1 / num2
            };
            case _ { throw Error.reject("Invalid operator") };
        }
    };
}
