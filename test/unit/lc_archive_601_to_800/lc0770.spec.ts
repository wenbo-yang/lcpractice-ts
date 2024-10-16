xdescribe('leetcode 770: description', () => {
    function basicCalculatorIV(expression: string, evalvars: string[], evalints: number[]): string[] {
        const m = new Map<int, string>();
        for (let i = 0; i < evalvars.length; ++i) {
            m.set(evalvars[i], evalints[i].toString());;
        }
        let tokens = tokenize(expression);
        tokens = inject(tokens, m);
        tokens = toRPNdddd(tokens);
        tokens = evaluate(tokens);
        return tokens;
    };

    function tokenize(expression: string): string[] {
        const tokens: string[] = [];
        for (let i = 0; i < expression.length;) {
            let token = '';
            if (Number(expression[i])) {
                while (i < expression.length &&  Number(expression[i])) {
                    token += expression[i++];
                }
            } else token += expression[i++];
            tokens.push(token);
            while (i < expression.length && expression[i] == ' ') ++i;
        }
        return tokens;
    }

    function inject(tokens: string[], m: Map<int, string>): string[] {
        throw new Error("Function not implemented.");
    }
    
    function toRPNdddd(tokens: string[]): string[] {
        throw new Error("Function not implemented.");
    }
    
    function evaluate(tokens: string[]): string[] {
        throw new Error("Function not implemented.");
    }

    // class Solution {
    //     private:
    //         vector<string> tokenize(string &expression) {
    //             vector<string> tokens;
    //             for (int i = 0; i < expression.size();) {
    //                 string token;
    //                 if (isalnum(expression[i])) {
    //                     while (i < expression.size() && isalnum(expression[i])) {
    //                         token += expression[i++];
    //                     }
    //                 } else token += expression[i++];
    //                 tokens.push_back(token);
    //                 while (i < expression.size() && expression[i] == ' ') ++i;
    //             }
    //             return tokens;
    //         }
    //         vector<string> inject(vector<string> &tokens, unordered_map<string, string> &m) {
    //             for (auto &token : tokens) {
    //                 if (m.find(token) != m.end()) token = m[token];
    //             }
    //             return tokens;
    //         }
    //         vector<string> toRPN(vector<string> &tokens) {
    //             stack<string> ops;
    //             vector<string> ans;
    //             for (auto &token : tokens) {
    //                 switch(token.back()) {
    //                     case '+':
    //                     case '-':
    //                         while (ops.size() && ops.top() != "(") {
    //                             ans.push_back(ops.top());
    //                             ops.pop();
    //                         }
    //                         ops.push(token);
    //                         break;
    //                     case '*':
    //                         if (ops.size() && ops.top() == "*") {
    //                             ans.push_back(ops.top());
    //                             ops.pop();
    //                         }
    //                         ops.push(token);
    //                         break;
    //                     case '(':
    //                         ops.push(token);
    //                         break;
    //                     case ')':
    //                         while (ops.size() && ops.top() != "(") {
    //                             ans.push_back(ops.top());
    //                             ops.pop();
    //                         }
    //                         if (ops.size()) ops.pop();
    //                         break;
    //                     default:
    //                         ans.push_back(token);
    //                         break;
    //                 }
    //             }
    //             while (ops.size()) {
    //                 ans.push_back(ops.top());
    //                 ops.pop();
    //             }
    //             return ans;
    //         }
    //         vector<string> splitSymbols(string exp) {
    //             istringstream s(exp);
    //             vector<string> ans;
    //             string symbol;
    //             while (getline(s, symbol, '*')) ans.push_back(symbol);
    //             return ans;
    //         }
    //         vector<string> evaluate(vector<string> &tokens) {
    //             stack<map<string, int>> s;
    //             for (auto &token : tokens) {
    //                 switch(token.back()) {
    //                     case '+':
    //                     case '-': {
    //                         int sign = token[0] == '+' ? 1 : -1;
    //                         auto b = s.top(); s.pop();
    //                         auto a = s.top(); s.pop();
    //                         map<string, int> m;
    //                         for (auto &p : a) {
    //                             m[p.first] += p.second;
    //                         }
    //                         for (auto &p : b) {
    //                             m[p.first] += sign * p.second;
    //                         }
    //                         s.push(m);
    //                         break;
    //                     }
    //                     case '*': {
    //                         auto b = s.top(); s.pop();
    //                         auto a = s.top(); s.pop();
    //                         map<string, int> m;
    //                         for (auto &p : a) {
    //                             auto symbol1 = splitSymbols(p.first);
    //                             for (auto &q : b) {
    //                                 istringstream sb(q.first);
    //                                 auto symbol2 = splitSymbols(q.first);
    //                                 string symbol;
    //                                 if (symbol1.size() == 1 && symbol1[0] == "1") {
    //                                     symbol = q.first;
    //                                 } else if (symbol2.size() == 1 && symbol2[0] == "1") {
    //                                     symbol = p.first;
    //                                 } else {
    //                                     for (int i = 0, j = 0; i < symbol1.size() || j < symbol2.size();) {
    //                                         if (symbol.size()) symbol += "*";
    //                                         if (i >= symbol1.size()) {
    //                                             symbol += symbol2[j++];
    //                                         } else if (j >= symbol2.size()) {
    //                                             symbol += symbol1[i++];
    //                                         } else if (symbol1[i] < symbol2[j]){
    //                                             symbol += symbol1[i++];
    //                                         } else {
    //                                             symbol += symbol2[j++];
    //                                         }
    //                                     }
    //                                 }
    //                                 m[symbol] += p.second * q.second;
    //                             }
    //                         }
    //                         s.push(m);
    //                         break;
    //                     }
    //                     default: {
    //                         map<string, int> m;
    //                         if (isdigit(token.back())) {
    //                             m["1"] = stoi(token);
    //                         } else {
    //                             m[token] = 1;
    //                         }
    //                         s.push(m);
    //                         break;
    //                     }
    //                 }
    //             }
    //             vector<string> ans;
    //             for (auto &p : s.top()) {
    //                 if (!p.second) continue;
    //                 ans.push_back(to_string(p.second) + (p.first == "1" ? "" : "*" + p.first));
    //             }
    //             stable_sort(ans.begin(), ans.end(), [&](string a, string b) {
    //                 return count(a.begin(), a.end(), '*') > count(b.begin(), b.end(), '*');
    //             });
    //             return ans;
    //         }
    //     public:
    //         vector<string> basicCalculatorIV(string expression, vector<string>& evalvars, vector<int>& evalints) {
    //             
    //         }
    //     };

    it('test case 1 Input:, target = 5, output 2 ', () => {});
});


