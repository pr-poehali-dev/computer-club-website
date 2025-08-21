import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [playerName, setPlayerName] = useState('');

  const tariffs = [
    {
      name: 'Базовый',
      price: '150',
      period: 'час',
      features: ['Игровой ПК', 'Интернет', 'Напитки'],
      color: 'cyan'
    },
    {
      name: 'Премиум',
      price: '250',
      period: 'час', 
      features: ['Топовый ПК', 'VR-гарнитура', 'Снеки', 'Приоритет'],
      color: 'pink',
      popular: true
    },
    {
      name: 'VIP',
      price: '400',
      period: 'час',
      features: ['Эксклюзивная зона', 'Персональный сервис', 'Все включено'],
      color: 'purple'
    }
  ];

  const games = [
    { name: 'Cyberpunk 2077', genre: 'RPG', rating: '9.2' },
    { name: 'Valorant', genre: 'FPS', rating: '8.8' },
    { name: 'Fortnite', genre: 'Battle Royale', rating: '8.5' },
    { name: 'CS2', genre: 'FPS', rating: '9.0' },
    { name: 'GTA V', genre: 'Action', rating: '9.5' },
    { name: 'Apex Legends', genre: 'Battle Royale', rating: '8.7' }
  ];

  const handleBooking = () => {
    if (playerName && selectedDate && selectedTime) {
      alert(`Бронирование подтверждено!\nИгрок: ${playerName}\nДата: ${selectedDate}\nВремя: ${selectedTime}`);
    } else {
      alert('Заполните все поля для бронирования');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-cyan-400/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center">
              <Icon name="Gamepad2" size={20} />
            </div>
            <h1 className="text-2xl font-bold neon-text">CYBER GAMING CLUB</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Главная</a>
            <a href="#tariffs" className="hover:text-cyan-400 transition-colors">Тарифы</a>
            <a href="#booking" className="hover:text-cyan-400 transition-colors">Бронирование</a>
            <a href="#games" className="hover:text-cyan-400 transition-colors">Игры</a>
            <a href="#contacts" className="hover:text-cyan-400 transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center cyber-grid">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(/img/fad22b72-7cd3-49e3-b7ef-78593658b7a3.jpg)` }}
        />
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            CYBER CLUB
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Погрузитесь в мир киберспорта и геймплея нового поколения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button">
              Забронировать сейчас
            </button>
            <button className="cyber-button-pink">
              Узнать больше
            </button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-pink-500 rounded-full animate-ping delay-75" />
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-purple-500 rounded-full animate-ping delay-150" />
      </section>

      {/* Tariffs Section */}
      <section id="tariffs" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
            ТАРИФНЫЕ ПЛАНЫ
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Выберите подходящий план для максимального игрового опыта
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`cyber-card relative ${tariff.popular ? 'scale-105' : ''}`}>
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white">
                    ПОПУЛЯРНЫЙ
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className={`text-2xl font-bold ${
                    tariff.color === 'cyan' ? 'text-cyan-400' :
                    tariff.color === 'pink' ? 'text-pink-500' : 'text-purple-500'
                  }`}>
                    {tariff.name}
                  </CardTitle>
                  <CardDescription className="text-4xl font-bold text-white">
                    {tariff.price}₽<span className="text-lg text-gray-400">/{tariff.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tariff.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Icon name="Check" size={16} className="text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <button className={`w-full ${
                    tariff.color === 'cyan' ? 'cyber-button' :
                    tariff.color === 'pink' ? 'cyber-button-pink' : 'cyber-button'
                  }`}>
                    Выбрать план
                  </button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
            ОНЛАЙН БРОНИРОВАНИЕ
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Забронируйте компьютер за пару кликов
          </p>
          
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400 flex items-center gap-3">
                <Icon name="Calendar" size={24} />
                Бронирование места
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">Ваше имя</label>
                <Input 
                  placeholder="Введите ваше имя"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  className="bg-gray-800 border-cyan-400/50 text-white"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Дата</label>
                  <Input 
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-gray-800 border-cyan-400/50 text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">Время</label>
                  <Select onValueChange={setSelectedTime}>
                    <SelectTrigger className="bg-gray-800 border-cyan-400/50 text-white">
                      <SelectValue placeholder="Выберите время" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-cyan-400/50">
                      {['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'].map(time => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <button onClick={handleBooking} className="cyber-button w-full">
                <Icon name="Zap" size={20} className="mr-2" />
                Забронировать
              </button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-text">
            ПОПУЛЯРНЫЕ ИГРЫ
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Играйте в самые популярные игры на мощных компьютерах
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {games.map((game, index) => (
              <Card key={index} className="cyber-card group hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full flex items-center justify-center">
                    <Icon name="Gamepad" size={24} />
                  </div>
                  <h3 className="font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {game.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{game.genre}</p>
                  <Badge className="bg-green-500/20 text-green-400">
                    ⭐ {game.rating}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4 bg-gradient-to-t from-gray-900/50 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 neon-text">
            КОНТАКТЫ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400">Наш адрес</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} className="text-pink-500" />
                  <span>ул. Киберпанк, 2077, Нео-Москва</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-cyan-400" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-purple-500" />
                  <span>info@cyberclub.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-green-400" />
                  <span>Ежедневно 10:00 - 02:00</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="cyber-card">
              <CardHeader>
                <CardTitle className="text-2xl text-pink-500">Социальные сети</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer">
                  <Icon name="MessageCircle" size={20} />
                  <span>Telegram: @cyberclub</span>
                </div>
                <div className="flex items-center gap-3 hover:text-pink-500 transition-colors cursor-pointer">
                  <Icon name="Users" size={20} />
                  <span>VK: vk.com/cyberclub</span>
                </div>
                <div className="flex items-center gap-3 hover:text-purple-500 transition-colors cursor-pointer">
                  <Icon name="Video" size={20} />
                  <span>YouTube: Cyber Gaming Club</span>
                </div>
                <div className="flex items-center gap-3 hover:text-green-400 transition-colors cursor-pointer">
                  <Icon name="Share2" size={20} />
                  <span>Discord: CyberClub#2077</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-400/20 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Cyber Gaming Club. Все права защищены. 
            <span className="neon-text ml-2">Добро пожаловать в будущее!</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;