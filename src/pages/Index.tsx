import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const skills = [
    { name: 'JavaScript', icon: 'Code2', level: 95, color: 'bg-yellow-400' },
    { name: 'TypeScript', icon: 'FileCode', level: 90, color: 'bg-blue-500' },
    { name: 'React', icon: 'Atom', level: 92, color: 'bg-cyan-400' },
    { name: 'Node.js', icon: 'Server', level: 88, color: 'bg-green-500' },
    { name: 'Python', icon: 'Bot', level: 85, color: 'bg-yellow-600' },
    { name: 'PostgreSQL', icon: 'Database', level: 87, color: 'bg-blue-600' },
    { name: 'Docker', icon: 'Container', level: 83, color: 'bg-blue-400' },
    { name: 'AWS', icon: 'Cloud', level: 80, color: 'bg-orange-500' }
  ];

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Полнофункциональная платформа для онлайн торговли с React, Node.js и PostgreSQL',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
      image: '/img/a75a8905-678a-4c30-bdf1-f86b546ab7f3.jpg',
      code: `const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="price">\${product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};`,
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Task Management API',
      description: 'RESTful API для управления задачами с аутентификацией и real-time уведомлениями',
      tech: ['Express.js', 'Socket.io', 'JWT', 'Redis'],
      image: '/img/1be0b50f-3e8d-4d20-9fc1-f827c39f9e47.jpg',
      code: `app.post('/api/tasks', authenticate, async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      userId: req.user.id
    });
    
    io.to(req.user.id).emit('taskCreated', task);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`,
      github: 'https://github.com',
      demo: 'https://api-demo.com'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Dashboard для аналитики в реальном времени с интерактивными графиками',
      tech: ['Vue.js', 'Chart.js', 'WebSocket', 'Python'],
      image: '/img/99629a02-f347-4e71-89ca-d42ee29eb0e8.jpg',
      code: `const AnalyticsChart = {
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [{
          label: 'Users',
          data: [],
          borderColor: '#0070F3'
        }]
      }
    };
  },
  
  mounted() {
    this.connectWebSocket();
  }
};`,
      github: 'https://github.com',
      demo: 'https://analytics-demo.com'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="font-mono text-xl font-bold text-code-blue">
              &lt;dev/&gt;
            </div>
            <div className="hidden md:flex space-x-8">
              {['Главная', 'Навыки', 'Проекты', 'Контакты'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['hero', 'skills', 'projects', 'contact'][index])}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === ['hero', 'skills', 'projects', 'contact'][index]
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-primary">
                  <Icon name="Terminal" size={20} />
                  <span className="font-mono text-sm">console.log("Hello, World!");</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Fullstack
                  <br />
                  <span className="text-primary">Developer</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Создаю современные веб-приложения с фокусом на производительность, 
                  масштабируемость и пользовательский опыт.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection('projects')} className="bg-primary hover:bg-primary/90">
                  Посмотреть проекты
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
                <Button variant="outline" onClick={() => scrollToSection('contact')}>
                  Связаться со мной
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Доступен для проектов</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card border rounded-lg p-6 font-mono text-sm animate-slide-up">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-muted-foreground">portfolio.ts</span>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div><span className="text-blue-500">interface</span> <span className="text-yellow-400">Developer</span> {`{`}</div>
                  <div className="pl-4">
                    <div><span className="text-purple-400">name</span>: <span className="text-green-400">"Alex Petrov"</span>;</div>
                    <div><span className="text-purple-400">role</span>: <span className="text-green-400">"Fullstack Developer"</span>;</div>
                    <div><span className="text-purple-400">experience</span>: <span className="text-orange-400">5</span>;</div>
                    <div><span className="text-purple-400">skills</span>: <span className="text-blue-400">string</span>[];</div>
                    <div><span className="text-purple-400">passionate</span>: <span className="text-orange-400">true</span>;</div>
                  </div>
                  <div>{`}`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Навыки</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Технологии и инструменты, которые я использую для создания качественных решений
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg ${skill.color} text-white`}>
                      <Icon name={skill.icon as any} size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.level}%</p>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${skill.color} transition-all duration-1000 delay-${index * 100}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Проекты</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Избранные проекты, демонстрирующие мой опыт и подход к разработке
            </p>
          </div>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardContent className="p-8 lg:col-span-1">
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Технологии:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-4">
                        <Button variant="default" size="sm">
                          <Icon name="Github" size={16} className="mr-2" />
                          GitHub
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="ExternalLink" size={16} className="mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <div className="bg-card border-l p-6">
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-auto">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-muted-foreground text-xs">code-preview.js</span>
                        <Icon name="Copy" size={14} className="text-muted-foreground cursor-pointer hover:text-foreground" />
                      </div>
                      <pre className="text-xs leading-relaxed">
                        <code>{project.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground text-lg">
              Готов обсудить ваш проект или возможности сотрудничества
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold">Связаться со мной</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Mail" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">alex.petrov@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Локация</p>
                    <p className="text-muted-foreground">Москва, Россия</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Icon name="Github" size={16} className="mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Linkedin" size={16} className="mr-2" />
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Twitter" size={16} className="mr-2" />
                  Twitter
                </Button>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Отправить сообщение</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full">
                    Отправить сообщение
                    <Icon name="Send" size={16} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-mono text-lg font-bold text-primary mb-4 md:mb-0">
              &lt;dev/&gt;
            </div>
            <p className="text-muted-foreground text-sm text-center">
              © 2024 Alex Petrov. Создано с ❤️ и кодом.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;