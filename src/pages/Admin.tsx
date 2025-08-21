import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data
  const stats = {
    totalBookings: 156,
    activeComputers: 24,
    todayRevenue: 45750,
    onlineUsers: 18
  };

  const bookings = [
    { id: 1, player: 'Алексей К.', computer: 'PC-01', time: '14:00-16:00', status: 'active', tariff: 'Премиум' },
    { id: 2, player: 'Мария С.', computer: 'PC-07', time: '16:00-18:00', status: 'pending', tariff: 'Базовый' },
    { id: 3, player: 'Дмитрий П.', computer: 'PC-15', time: '18:00-20:00', status: 'completed', tariff: 'VIP' },
    { id: 4, player: 'Анна Л.', computer: 'PC-03', time: '20:00-22:00', status: 'active', tariff: 'Премиум' }
  ];

  const computers = [
    { id: 'PC-01', status: 'occupied', player: 'Алексей К.', timeLeft: '1ч 23м', specs: 'RTX 4080' },
    { id: 'PC-02', status: 'available', player: null, timeLeft: null, specs: 'RTX 4070' },
    { id: 'PC-03', status: 'occupied', player: 'Анна Л.', timeLeft: '45м', specs: 'RTX 4080' },
    { id: 'PC-04', status: 'maintenance', player: null, timeLeft: null, specs: 'RTX 4070' },
    { id: 'PC-05', status: 'available', player: null, timeLeft: null, specs: 'RTX 4060' },
    { id: 'PC-06', status: 'occupied', player: 'Игорь В.', timeLeft: '2ч 15м', specs: 'RTX 4090' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'occupied':
        return 'bg-green-500';
      case 'pending':
      case 'available':
        return 'bg-blue-500';
      case 'completed':
        return 'bg-gray-500';
      case 'maintenance':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Активно';
      case 'pending': return 'Ожидание';
      case 'completed': return 'Завершено';
      case 'occupied': return 'Занято';
      case 'available': return 'Свободно';
      case 'maintenance': return 'Ремонт';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-cyan-400/20 bg-gray-900/50 backdrop-blur-md">
        <div className="px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center">
              <Icon name="Shield" size={20} />
            </div>
            <div>
              <h1 className="text-2xl font-bold neon-text">ADMIN PANEL</h1>
              <p className="text-sm text-gray-400">Cyber Gaming Club</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="cyber-button text-sm">
              <Icon name="User" size={16} className="mr-2" />
              Администратор
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-gray-900 border border-cyan-400/20">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-cyan-400 data-[state=active]:text-black">
              <Icon name="BarChart3" size={16} className="mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="bookings" className="data-[state=active]:bg-cyan-400 data-[state=active]:text-black">
              <Icon name="Calendar" size={16} className="mr-2" />
              Бронирования
            </TabsTrigger>
            <TabsTrigger value="computers" className="data-[state=active]:bg-cyan-400 data-[state=active]:text-black">
              <Icon name="Monitor" size={16} className="mr-2" />
              Компьютеры
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-cyan-400 data-[state=active]:text-black">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="cyber-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Всего бронирований</CardTitle>
                  <Icon name="Calendar" size={16} className="text-cyan-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold neon-text">{stats.totalBookings}</div>
                  <p className="text-xs text-green-400">+12% от вчера</p>
                </CardContent>
              </Card>

              <Card className="cyber-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Активных ПК</CardTitle>
                  <Icon name="Monitor" size={16} className="text-pink-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-pink-500">{stats.activeComputers}/30</div>
                  <p className="text-xs text-gray-400">80% загрузка</p>
                </CardContent>
              </Card>

              <Card className="cyber-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Доход сегодня</CardTitle>
                  <Icon name="DollarSign" size={16} className="text-green-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-400">{stats.todayRevenue.toLocaleString()}₽</div>
                  <p className="text-xs text-green-400">+8% от среднего</p>
                </CardContent>
              </Card>

              <Card className="cyber-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">Онлайн игроки</CardTitle>
                  <Icon name="Users" size={16} className="text-purple-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-500">{stats.onlineUsers}</div>
                  <p className="text-xs text-gray-400">Пиковое время</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-xl text-cyan-400">Последние бронирования</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {bookings.slice(0, 3).map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div>
                        <p className="font-medium">{booking.player}</p>
                        <p className="text-sm text-gray-400">{booking.computer} • {booking.time}</p>
                      </div>
                      <Badge className={`${getStatusColor(booking.status)} text-white`}>
                        {getStatusText(booking.status)}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-xl text-pink-500">Статус компьютеров</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-green-400">Занято</span>
                      <span className="font-bold">18/30</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-blue-400">Свободно</span>
                      <span className="font-bold">10/30</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '33%'}}></div>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-red-400">На ремонте</span>
                      <span className="font-bold">2/30</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-red-400 h-2 rounded-full" style={{width: '7%'}}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Bookings Tab */}
          <TabsContent value="bookings" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold neon-text">Управление бронированиями</h2>
              <Button className="cyber-button">
                <Icon name="Plus" size={16} className="mr-2" />
                Новое бронирование
              </Button>
            </div>

            <Card className="cyber-card">
              <CardHeader>
                <CardTitle>Активные бронирования</CardTitle>
                <CardDescription>Список всех текущих и предстоящих бронирований</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-700">
                      <TableHead className="text-cyan-400">ID</TableHead>
                      <TableHead className="text-cyan-400">Игрок</TableHead>
                      <TableHead className="text-cyan-400">Компьютер</TableHead>
                      <TableHead className="text-cyan-400">Время</TableHead>
                      <TableHead className="text-cyan-400">Тариф</TableHead>
                      <TableHead className="text-cyan-400">Статус</TableHead>
                      <TableHead className="text-cyan-400">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking.id} className="border-gray-700">
                        <TableCell>#{booking.id}</TableCell>
                        <TableCell className="font-medium">{booking.player}</TableCell>
                        <TableCell>{booking.computer}</TableCell>
                        <TableCell>{booking.time}</TableCell>
                        <TableCell>{booking.tariff}</TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(booking.status)} text-white`}>
                            {getStatusText(booking.status)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-cyan-400/50 hover:bg-cyan-400/20">
                              <Icon name="Edit" size={14} />
                            </Button>
                            <Button variant="outline" size="sm" className="h-8 w-8 p-0 border-red-400/50 hover:bg-red-400/20">
                              <Icon name="Trash2" size={14} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Computers Tab */}
          <TabsContent value="computers" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold neon-text">Мониторинг компьютеров</h2>
              <div className="flex gap-2">
                <Button variant="outline" className="cyber-button text-sm">
                  <Icon name="RefreshCw" size={16} className="mr-2" />
                  Обновить
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {computers.map((computer) => (
                <Card key={computer.id} className="cyber-card">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{computer.id}</CardTitle>
                      <Badge className={`${getStatusColor(computer.status)} text-white`}>
                        {getStatusText(computer.status)}
                      </Badge>
                    </div>
                    <CardDescription>{computer.specs}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {computer.player && (
                      <div className="flex items-center gap-2">
                        <Icon name="User" size={16} className="text-cyan-400" />
                        <span>{computer.player}</span>
                      </div>
                    )}
                    {computer.timeLeft && (
                      <div className="flex items-center gap-2">
                        <Icon name="Clock" size={16} className="text-pink-500" />
                        <span>Осталось: {computer.timeLeft}</span>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="pt-3">
                    <div className="flex gap-2 w-full">
                      {computer.status === 'available' && (
                        <Button className="cyber-button flex-1 text-sm">
                          <Icon name="Play" size={14} className="mr-2" />
                          Запустить
                        </Button>
                      )}
                      {computer.status === 'occupied' && (
                        <Button variant="outline" className="cyber-button-pink flex-1 text-sm">
                          <Icon name="Pause" size={14} className="mr-2" />
                          Завершить
                        </Button>
                      )}
                      <Button variant="outline" size="sm" className="px-3 border-gray-600 hover:bg-gray-700">
                        <Icon name="Settings" size={14} />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-bold neon-text">Настройки системы</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-xl text-cyan-400">Тарифы</CardTitle>
                  <CardDescription>Управление ценами и планами</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Базовый тариф (₽/час)</label>
                    <Input className="bg-gray-800 border-gray-600" defaultValue="150" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Премиум тариф (₽/час)</label>
                    <Input className="bg-gray-800 border-gray-600" defaultValue="250" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">VIP тариф (₽/час)</label>
                    <Input className="bg-gray-800 border-gray-600" defaultValue="400" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="cyber-button">Сохранить</Button>
                </CardFooter>
              </Card>

              <Card className="cyber-card">
                <CardHeader>
                  <CardTitle className="text-xl text-pink-500">Общие настройки</CardTitle>
                  <CardDescription>Основные параметры клуба</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Время работы</label>
                    <Select defaultValue="10-02">
                      <SelectTrigger className="bg-gray-800 border-gray-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="10-02">10:00 - 02:00</SelectItem>
                        <SelectItem value="24">24/7</SelectItem>
                        <SelectItem value="12-00">12:00 - 00:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Максимальное бронирование</label>
                    <Select defaultValue="4">
                      <SelectTrigger className="bg-gray-800 border-gray-600">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        <SelectItem value="2">2 часа</SelectItem>
                        <SelectItem value="4">4 часа</SelectItem>
                        <SelectItem value="8">8 часов</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="cyber-button">Применить</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;