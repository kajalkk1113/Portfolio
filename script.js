 document.getElementById('year-span').textContent = new Date().getFullYear();

        // Mobile Burger Menu Toggle
        const mobileToggle = document.getElementById('mobile-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const burgerIcon = document.getElementById('burger-icon');

        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if(mobileMenu.classList.contains('hidden')) {
                burgerIcon.classList.replace('fa-xmark', 'fa-bars');
            } else {
                burgerIcon.classList.replace('fa-bars', 'fa-xmark');
            }
        });

        function closeMobileMenu() {
            mobileMenu.classList.add('hidden');
            burgerIcon.classList.replace('fa-xmark', 'fa-bars');
        }

        // Typing Effect in Hero
        const roles = [
            "Full-Stack Web Developer",
            "MERN Stack Developer",
            "RESTful API Architect",
            "Junior Software Engineer"
        ];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingText = document.getElementById('typing-text');

        function typeEffect() {
            const currentRole = roles[roleIndex];
            if (isDeleting) {
                typingText.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let typingSpeed = isDeleting ? 40 : 80;

            if (!isDeleting && charIndex === currentRole.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typingSpeed = 400;
            }

            setTimeout(typeEffect, typingSpeed);
        }
        typeEffect();

        // Skill Matrix Filtering
        function filterSkills(category) {
            const tabs = document.querySelectorAll('.skill-tab');
            const cards = document.querySelectorAll('.skill-card');

            tabs.forEach(tab => {
                if(tab.getAttribute('data-filter') === category) {
                    tab.classList.add('border-cyber-accent', 'text-cyber-accent', 'font-semibold');
                    tab.classList.remove('border-white/10', 'text-gray-400');
                } else {
                    tab.classList.remove('border-cyber-accent', 'text-cyber-accent', 'font-semibold');
                    tab.classList.add('border-white/10', 'text-gray-400');
                }
            });

            cards.forEach(card => {
                if(category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // Timeline Tabs Switch
        function switchTimelineTab(tab) {
            const expContainer = document.getElementById('timeline-exp');
            const eduContainer = document.getElementById('timeline-edu');
            const expBtn = document.getElementById('tab-btn-exp');
            const eduBtn = document.getElementById('tab-btn-edu');

            if(tab === 'exp') {
                expContainer.classList.remove('hidden');
                eduContainer.classList.add('hidden');
                expBtn.classList.add('border-cyber-accent', 'text-cyber-accent');
                expBtn.classList.remove('border-white/10', 'text-gray-400');
                eduBtn.classList.remove('border-cyber-accent', 'text-cyber-accent');
                eduBtn.classList.add('border-white/10', 'text-gray-400');
            } else {
                expContainer.classList.add('hidden');
                eduContainer.classList.remove('hidden');
                eduBtn.classList.add('border-cyber-accent', 'text-cyber-accent');
                eduBtn.classList.remove('border-white/10', 'text-gray-400');
                expBtn.classList.remove('border-cyber-accent', 'text-cyber-accent');
                expBtn.classList.add('border-white/10', 'text-gray-400');
            }
        }

        // Interactive Demo Lab Task Adder
        let taskId = 804;
        function addDemoTask() {
            const input = document.getElementById('demo-input');
            const text = input.value.trim();
            if(!text) return;

            const list = document.getElementById('demo-task-list');
            const countElem = document.getElementById('task-count');
            
            const newItem = document.createElement('div');
            newItem.className = "glass-panel rounded-xl p-3 flex items-center justify-between border-white/5 font-mono text-xs animate-bounce";
            newItem.innerHTML = `
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-spinner text-cyber-accent animate-spin"></i>
                    <span class="text-white">${text}</span>
                </div>
                <span class="text-[10px] text-gray-500 font-mono">ID: ${taskId}</span>
            `;

            list.prepend(newItem);
            input.value = '';

            const activeCount = list.children.length;
            countElem.textContent = activeCount;

            // Update JSON Output
            const jsonOutput = document.getElementById('json-output');
            jsonOutput.textContent = JSON.stringify({
                success: true,
                statusCode: 201,
                message: `New task '${text}' inserted via Mongoose schema`,
                newTaskId: taskId,
                activeCount: activeCount,
                timestamp: new Date().toISOString()
            }, null, 2);

            taskId++;

            setTimeout(() => {
                newItem.classList.remove('animate-bounce');
            }, 1000);
        }

        // Copy Utility
        function copyContact(text) {
            const tempInput = document.createElement("input");
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);

            alert(`Copied "${text}" to clipboard!`);
        }

        // Form Submit Handler
        function handleContactSubmit(e) {
            e.preventDefault();
            const toast = document.getElementById('contact-success-toast');
            toast.classList.remove('hidden');
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 4000);
        }

        // Resume Download Trigger
        function downloadResume() {
            alert("Resume download triggered for Kajal Kumari (Full-Stack Developer).");
        }

        // Project Deep Dive Modal Data & Function
        const projectDetails = {
            api: {
                title: "RESTful Backend API Development",
                tag: "Node.js • Express.js • MongoDB • Postman",
                github: "https://github.com/kajalkk1113/phase-6.git",
                demo: "https://kajalkk1113.github.io/phase-6/",
                desc: "A production-oriented backend API suite engineered with Express.js micro-modules. Exposes 12+ RESTful endpoints supporting complete CRUD functionality.",
                bullets: [
                    "Developed 4 distinct modules: Feedback Manager, Contact Form, Quick Notes, and Progress Tracker.",
                    "Configured Mongoose schemas with field-level strict validations (type checking, string trimming, required constraints).",
                    "Integrated Express middleware for request parsing, CORS configuration, and centralized error handlers.",
                    "Conducted automated Postman collection tests verifying HTTP status codes and payload structures."
                ]
            },
            task: {
                title: "Student Task Manager Dashboard",
                tag: "React.js • Vite • React Router • Vercel",
                github: "https://github.com/kajalkk1113/Task-Manager.git",
                demo: "https://task-manager-kappa-tan.vercel.app/",
                desc: "Single-page responsive task management platform built for students to streamline daily productivity.",
                bullets: [
                    "Implemented custom React Hooks (useState, useEffect) for client-side state management and dynamic UI rendering.",
                    "Designed dynamic filter views allowing users to filter by completion status, priority tags, and date.",
                    "Constructed responsive dark-theme design utilizing modular CSS media queries.",
                    "Deployed live production build on Vercel with optimized build assets."
                ]
            },
            restaurant: {
                title: "Interactive Restaurant Web Platform",
                tag: "HTML5 • CSS Flexbox • ES6+ JavaScript • GitHub Pages",
                github: "https://github.com/kajalkk1113/Restaurant-webpage.git",
                demo: "https://kajalkk1113.github.io/Restaurant-webpage/",
                desc: "Multi-section interactive frontend for modern dining services featuring interactive menu injection and dynamic DOM elements.",
                bullets: [
                    "Utilized native ES6+ DOM manipulation methods to dynamically append, edit, and delete menu items upon form submission.",
                    "Engineered flexible CSS grid & flexbox layouts for optimal rendering across desktop and mobile viewports.",
                    "Included client-side administrative form management and dynamic menu category navigation.",
                    "Deployed static website on GitHub Pages."
                ]
            }
        };

        function openProjectModal(key) {
            const data = projectDetails[key];
            const container = document.getElementById('modal-content');
            
            container.innerHTML = `
                <span class="text-xs font-mono text-cyber-accent uppercase tracking-wider font-semibold">${data.tag}</span>
                <h3 class="text-2xl font-bold text-white mt-1 mb-4">${data.title}</h3>
                <p class="text-sm text-gray-300 leading-relaxed mb-6">${data.desc}</p>
                <div class="space-y-3 mb-6">
                    <h4 class="text-xs font-mono text-white uppercase font-bold">Key Architectural Highlights:</h4>
                    ${data.bullets.map(b => `
                        <div class="flex items-start gap-2 text-xs text-gray-400">
                            <i class="fa-solid fa-check text-cyber-accent mt-0.5"></i>
                            <span>${b}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                    <a href="${data.demo}" target="_blank" rel="noopener noreferrer" class="flex-1 py-2.5 bg-cyber-accent text-black font-semibold text-xs rounded-xl text-center hover:bg-cyan-300 font-mono flex items-center justify-center gap-2">
                        <i class="fa-solid fa-globe"></i> Open Live Demo
                    </a>
                    <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="flex-1 py-2.5 bg-white/10 text-white font-semibold text-xs rounded-xl text-center hover:bg-white/20 font-mono flex items-center justify-center gap-2 border border-white/10">
                        <i class="fa-brands fa-github"></i> View GitHub Repo
                    </a>
                </div>
            `;

            document.getElementById('project-modal').classList.remove('hidden');
        }

        function closeProjectModal() {
            document.getElementById('project-modal').classList.add('hidden');
        }