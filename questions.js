const QUESTION_BANK = {
    // ============================
    // PRACTICAL ASSESSMENTS
    // ============================

    // 1. C Programming
    'c_programming': [
        { q: "Who is known as the father of C language?", options: ["James Gosling", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"], ans: 1 },
        { q: "Which of the following is not a valid C variable name?", options: ["int number;", "float rate;", "int 1st_number;", "int variable_count;"], ans: 2 },
        { q: "All keywords in C are in _______", options: ["LowerCase", "UpperCase", "CamelCase", "None of the mentioned"], ans: 0 },
        { q: "Which is valid C expression?", options: ["int my_num = 100,000;", "int my_num = 100000;", "int my num = 1000;", "int $my_num = 10000;"], ans: 1 },
        { q: "What is an example of iteration in C?", options: ["for", "while", "do-while", "all of the mentioned"], ans: 3 },
        { q: "Functions can return how many values?", options: ["Two", "Zero", "One", "Many"], ans: 2 },
        { q: "What is the size of 'int' in a 32-bit compiler?", options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"], ans: 1 },
        { q: "Pointer is a variable that holds...", options: ["Value", "Address", "Instructions", "None"], ans: 1 },
        { q: "Which format specifier is used for string?", options: ["%d", "%c", "%s", "%f"], ans: 2 },
        { q: "Array index starts from?", options: ["1", "0", "-1", "undefined"], ans: 1 }
    ],

    // 2. C++ Programming
    'cpp_programming': [
        { q: "C++ is a superset of?", options: ["Java", "C", "Python", "Smalltalk"], ans: 1 },
        { q: "Which operator is used to access members of a class?", options: [".", "->", ":", "both . and ->"], ans: 3 },
        { q: "What is 'cin' in C++?", options: ["Keyword", "Object", "Function", "Operator"], ans: 1 },
        { q: "Constructors are used to?", options: ["Initialize objects", "Construct data", "Free memory", "None"], ans: 0 },
        { q: "Destructor has the same name as class with a prefix...", options: ["~", "!", "#", "@"], ans: 0 },
        { q: "Which concept allows multiple definitions for a function?", options: ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"], ans: 0 },
        { q: "Private members are accessible...", options: ["Everywhere", "Within class only", "In derived class", "None"], ans: 1 },
        { q: "What is 'friend' function?", options: ["Member function", "Non-member function", "Recursive function", "Inline function"], ans: 1 },
        { q: "Which keyword is used for templates?", options: ["template", "Template", "temp", "type"], ans: 0 },
        { q: "Standard C++ library for input/output is?", options: ["<stdio.h>", "<iostream>", "<conio.h>", "<stdlib.h>"], ans: 1 }
    ],

    // 3. Core Java
    'java_core': [
        { q: "Who invented Java?", options: ["James Gosling", "Dennis Ritchie", "Guido van Rossum", "Bjarne Stroustrup"], ans: 0 },
        { q: "Which component is responsible for running java programs?", options: ["JDK", "JVM", "JRE", "JIT"], ans: 2 },
        { q: "Which of these is not a Java feature?", options: ["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"], ans: 2 },
        { q: "What is the extension of java code files?", options: [".js", ".txt", ".class", ".java"], ans: 3 },
        { q: "Which environment variable is used to set the java path?", options: ["MAVEN_Path", "JavaPATH", "JAVA", "JAVA_HOME"], ans: 3 },
        { q: "Which statement is true about Java?", options: ["Platform dependent", "Platform independent", "Sequence dependent", "None"], ans: 1 },
        { q: "Size of int in Java is?", options: ["16 bit", "32 bit", "64 bit", "Depends on System"], ans: 1 },
        { q: "Method overloading is an example of?", options: ["Static Binding", "Dynamic Binding", "Both", "None"], ans: 0 },
        { q: "Which keyword is used for inheritance?", options: ["super", "this", "extends", "implements"], ans: 2 },
        { q: "Exception handling in Java is done using?", options: ["try-catch", "final", "throw", "All of above"], ans: 3 }
    ],

    // 4. DBMS (Replaces Python)
    'dbms': [
        { q: "What is the full form of DBMS?", options: ["Data of Binary Management System", "Database Management System", "Database Management Service", "Data Backup Management System"], ans: 1 },
        { q: "What is a Tuple?", options: ["A column", "A row", "A table", "A database"], ans: 1 },
        { q: "Which key uniquely identifies a record?", options: ["Primary Key", "Foreign Key", "Unique Key", "Super Key"], ans: 0 },
        { q: "SQL stands for?", options: ["Structured Query Language", "Simple Query Language", "Structured Question Language", "None"], ans: 0 },
        { q: "Which command is used to remove a table?", options: ["DELETE", "REMOVE", "DROP", "TRUNCATE"], ans: 2 },
        { q: "What is 1NF in Normalization?", options: ["Remove repeating groups", "Remove partial dependency", "Remove transitive dependency", "None"], ans: 0 },
        { q: "ACID properties stand for?", options: ["Atomicity, Consistency, Isolation, Durability", "Atomicity, Consistency, Integrity, Durability", "Accuracy, Consistency, Isolation, Durability", "None"], ans: 0 },
        { q: "Which is a DML command?", options: ["CREATE", "ALTER", "INSERT", "DROP"], ans: 2 },
        { q: "A relationship between two tables is created using?", options: ["Primary Key", "Foreign Key", "Candidate Key", "Super Key"], ans: 1 },
        { q: "Which symbol is used for 'Select' operation in Relational Algebra?", options: ["Sigma (σ)", "Pi (π)", "Rho (ρ)", "Lambda (λ)"], ans: 0 }
    ],

    // 5. Web Technology
    'web_tech': [
        { q: "HTML stands for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None"], ans: 0 },
        { q: "Which tag is used for largest heading?", options: ["<h6>", "<h1>", "<head>", "<header>"], ans: 1 },
        { q: "What does CSS stand for?", options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"], ans: 1 },
        { q: "Which HTML attribute is used to define inline styles?", options: ["font", "style", "class", "styles"], ans: 1 },
        { q: "Which property is used to change text color?", options: ["text-color", "font-color", "color", "fgcolor"], ans: 2 },
        { q: "Inside which HTML element do we put JavaScript?", options: ["<js>", "<scripting>", "<javascript>", "<script>"], ans: 3 },
        { q: "How do you create a function in JavaScript?", options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "def myFunction()"], ans: 0 },
        { q: "Which event occurs when user clicks an HTML element?", options: ["onchange", "onmouseover", "onmouseclick", "onclick"], ans: 3 },
        { q: "Bootstrap is a...?", options: ["Backend Framework", "CSS Framework", "Database", "Testing Tool"], ans: 1 },
        { q: "HTTP stands for?", options: ["Hyper Text Transfer Protocol", "High Transfer Protocol", "Hyper Transfer Text Protocol", "None"], ans: 0 }
    ],

    // ============================
    // THEORY ASSESSMENTS
    // ============================

    // 6. Operating System
    'os': [
        { q: "What is the main function of the OS?", options: ["Calculation", "Word Processing", "Resource Management", "Web Browsing"], ans: 2 },
        { q: "Which is not an Operating System?", options: ["Windows", "Linux", "Oracle", "DOS"], ans: 2 },
        { q: "What is a process?", options: ["A program in execution", "A program in memory", "A task", "All of the above"], ans: 3 },
        { q: "FIFO scheduling stands for?", options: ["First In First Out", "Fast In Fast Out", "First In Fast Out", "None"], ans: 0 },
        { q: "Which is a deadlock condition?", options: ["Mutual Exclusion", "Hold and Wait", "No Preemption", "All of the above"], ans: 3 },
        { q: "Virtual memory is?", options: ["Real memory", "Illusion of large memory", "Main memory", "Cache memory"], ans: 1 },
        { q: "Page fault occurs when?", options: ["Page is in memory", "Page is not in memory", "Process fails", "None"], ans: 1 },
        { q: "Semaphore is a variable used for?", options: ["Synchronization", "Calculation", "Storage", "Input"], ans: 0 },
        { q: "Which command lists files in Linux?", options: ["ls", "cd", "mv", "dir"], ans: 0 },
        { q: "Banker's algorithm is used for?", options: ["Deadlock Avoidance", "Deadlock Prevention", "Deadlock Detection", "None"], ans: 0 }
    ],

    // 7. Computer Networks
    'networks': [
        { q: "What is the full form of IP?", options: ["Internet Provider", "Internet Protocol", "Internet Port", "Internal Protocol"], ans: 1 },
        { q: "How many layers are in the OSI model?", options: ["5", "6", "7", "4"], ans: 2 },
        { q: "Which layer provides end-to-end communication?", options: ["Physical", "Network", "Transport", "Session"], ans: 2 },
        { q: "Which protocol is connectionless?", options: ["TCP", "UDP", "FTP", "SMTP"], ans: 1 },
        { q: "MAC address is of how many bits?", options: ["32", "48", "64", "128"], ans: 1 },
        { q: "DNS stands for?", options: ["Domain Name System", "Data Name System", "Domain Network Service", "None"], ans: 0 },
        { q: "Ping command uses which protocol?", options: ["TCP", "ARP", "ICMP", "BootP"], ans: 2 },
        { q: "Which topology uses a central hub?", options: ["Bus", "Ring", "Star", "Mesh"], ans: 2 },
        { q: "IPv4 address size is?", options: ["32 bit", "64 bit", "128 bit", "16 bit"], ans: 0 },
        { q: "HTTP uses which port?", options: ["21", "23", "80", "443"], ans: 2 }
    ],

    // 8. Cloud Computing
    'cloud': [
        { q: "What is Cloud Computing?", options: ["Storing data on hard drive", "Storing data on internet", "Processing on local machine", "None"], ans: 1 },
        { q: "Which is not a cloud service model?", options: ["SaaS", "PaaS", "IaaS", "HaaS"], ans: 3 },
        { q: "AWS stands for?", options: ["Amazon Web Services", "Apple Web System", "Advanced Web Storage", "None"], ans: 0 },
        { q: "Which is an example of SaaS?", options: ["Google Drive", "AWS EC2", "Google App Engine", "Azure"], ans: 0 },
        { q: "Which is a deployment model?", options: ["Public", "Private", "Hybrid", "All of above"], ans: 3 },
        { q: "What is virtualization?", options: ["Creating virtual version of resource", "Running games", "Watching movies", "None"], ans: 0 },
        { q: "Scalability in cloud means?", options: ["Fixed size", "Ability to grow/shrink", "Manual upgrade", "None"], ans: 1 },
        { q: "Which is a major risk in cloud?", options: ["Security", "Speed", "Accessibility", "Cost"], ans: 0 },
        { q: "Which service offers raw computing power?", options: ["SaaS", "IaaS", "PaaS", "DaaS"], ans: 1 },
        { q: "Dropbox is an example of?", options: ["Cloud Storage", "Cloud Compute", "Cloud Network", "None"], ans: 0 }
    ],

    // 9. Artificial Intelligence
    'ai': [
        { q: "Who is the father of AI?", options: ["Alan Turing", "Charles Babbage", "John McCarthy", "Elon Musk"], ans: 2 },
        { q: "Artificial Intelligence is about?", options: ["Playing games", "Making machine intelligent", "Programming", "Websites"], ans: 1 },
        { q: "Which search method takes less memory?", options: ["DFS", "BFS", "Linear Search", "Optimal Search"], ans: 0 },
        { q: "What is a chatbot?", options: ["Robot", "AI software for conversation", "Hardware", "Virus"], ans: 1 },
        { q: "Which language is best for AI?", options: ["C", "HTML", "Python", "PHP"], ans: 2 },
        { q: "What is Machine Learning?", options: ["Subset of AI", "Superset of AI", "Database", "Hardware"], ans: 0 },
        { q: "Neural Networks are inspired by?", options: ["Computer circuits", "Human Brain", "Solar system", "Trees"], ans: 1 },
        { q: "Turing Test checks for?", options: ["Human intelligence in machine", "Speed", "Memory", "Power"], ans: 0 },
        { q: "NLP stands for?", options: ["Natural Language Processing", "New Language Protocol", "Neural Language Program", "None"], ans: 0 },
        { q: "Which is an application of AI?", options: ["Self driving cars", "Face recognition", "Siri/Alexa", "All of above"], ans: 3 }
    ],

    // 10. Computer Architecture
    'arch': [
        { q: "CPU stands for?", options: ["Central Process Unit", "Central Processing Unit", "Control Process Unit", "None"], ans: 1 },
        { q: "The brain of the computer is?", options: ["RAM", "CPU", "HDD", "Monitor"], ans: 1 },
        { q: "Which memory is fastest?", options: ["RAM", "Cache", "HDD", "SSD"], ans: 1 },
        { q: "RISC stands for?", options: ["Reduced Instruction Set Computer", "Redundant Instruction Set", "Rapid Instruction", "None"], ans: 0 },
        { q: "The main circuit board is called?", options: ["Motherboard", "Fatherboard", "Breadboard", "Dash Board"], ans: 0 },
        { q: "ALU performs?", options: ["Logic operations", "Arithmetic operations", "Both A & B", "Storage"], ans: 2 },
        { q: "1 Byte equals?", options: ["4 bits", "8 bits", "16 bits", "32 bits"], ans: 1 },
        { q: "Which bus carries data?", options: ["Address Bus", "Data Bus", "Control Bus", "Power Bus"], ans: 1 },
        { q: "Pipelining increases?", options: ["Latency", "Throughput", "Cost", "Size"], ans: 1 },
        { q: "Which register holds the current instruction?", options: ["PC", "IR", "MAR", "MDR"], ans: 1 }
    ]
};