import FontAwesome6 from '@react-native-vector-icons/fontawesome6'
import Ionicons from '@react-native-vector-icons/ionicons'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Ticket = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>();
    const [selectedDate, setSelectedDate] = useState<string>();

  const categories = [
    'Hotel',
    'Aircraft',
    'Villa',
    'Attraction Tickets',
    'Local Transportation',
  ];
  const today = new Date();
  const monthName = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();

  const next7Days = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i);

    const dayName = date
      .toLocaleDateString('en-US', { weekday: 'short' })
      .charAt(0);
    const dayNumber = date.getDate();
    const fullDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    return { dayName, dayNumber, fullDate };
  });

const tickets = [
  {
    id: 1,
    from: {
      code: 'NL',
      city: 'Rotterdam',
      time: '5:30pm',
      date: 'Mon, 23 Jun',
    },
    to: {
      code: 'IDN',
      city: 'Labuan Bajo',
      time: '3:30am',
      date: 'Tue, 24 Jun',
    },
    price: 1700,
  },
  {
    id: 2,
    from: {
      code: 'SIN',
      city: 'Singapore',
      time: '8:00am',
      date: 'Wed, 25 Jun',
    },
    to: { code: 'JPN', city: 'Tokyo', time: '4:15pm', date: 'Wed, 25 Jun' },
    price: 2100,
  },
  {
    id: 3,
    from: {
      code: 'BKK',
      city: 'Bangkok',
      time: '11:45am',
      date: 'Thu, 26 Jun',
    },
    to: { code: 'HKG', city: 'Hong Kong', time: '3:20pm', date: 'Thu, 26 Jun' },
    price: 950,
  },
  {
    id: 4,
    from: { code: 'SYD', city: 'Sydney', time: '9:00pm', date: 'Fri, 27 Jun' },
    to: { code: 'NZL', city: 'Auckland', time: '2:00am', date: 'Sat, 28 Jun' },
    price: 1250,
  },
  {
    id: 5,
    from: { code: 'IDN', city: 'Jakarta', time: '7:15am', date: 'Sat, 28 Jun' },
    to: {
      code: 'MYS',
      city: 'Kuala Lumpur',
      time: '9:00am',
      date: 'Sat, 28 Jun',
    },
    price: 300,
  },
  {
    id: 6,
    from: {
      code: 'USA',
      city: 'Los Angeles',
      time: '10:00pm',
      date: 'Sun, 29 Jun',
    },
    to: { code: 'UK', city: 'London', time: '4:30pm', date: 'Mon, 30 Jun' },
    price: 3400,
  },
  {
    id: 7,
    from: {
      code: 'FRA',
      city: 'Frankfurt',
      time: '6:45am',
      date: 'Mon, 30 Jun',
    },
    to: { code: 'ESP', city: 'Madrid', time: '9:00am', date: 'Mon, 30 Jun' },
    price: 400,
  },
  {
    id: 8,
    from: { code: 'IDN', city: 'Bali', time: '2:20pm', date: 'Tue, 1 Jul' },
    to: { code: 'AUS', city: 'Melbourne', time: '9:30pm', date: 'Tue, 1 Jul' },
    price: 1600,
  },
  {
    id: 9,
    from: { code: 'UAE', city: 'Dubai', time: '1:00am', date: 'Wed, 2 Jul' },
    to: { code: 'FRA', city: 'Frankfurt', time: '7:30am', date: 'Wed, 2 Jul' },
    price: 2200,
  },
  {
    id: 10,
    from: { code: 'KOR', city: 'Seoul', time: '5:15pm', date: 'Thu, 3 Jul' },
    to: { code: 'IDN', city: 'Jakarta', time: '11:45pm', date: 'Thu, 3 Jul' },
    price: 1900,
  },
];

  return (
    <ScrollView style={{ paddingHorizontal: 24 }}>
      <View
        style={{
          paddingTop: 76,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Ionicons name="arrow-back-outline" size={24} />
        <Text style={{ fontSize: 16, fontWeight: 600 }}>Tickets</Text>
        <Ionicons name="ellipsis-vertical" size={24} />
      </View>
      <View style={{ marginTop: 24 }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 400,
            color: 'rgba(0, 0, 0, 0.8)',
            marginBottom: 4,
          }}
        >
          Current locations
        </Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Text style={{ fontSize: 24, fontWeight: 600 }}>Netherlands</Text>
          <Ionicons name="chevron-down" size={24} />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexDirection: 'row', gap: 12, marginTop: 24 }}
      >
        {categories.map((category, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => setSelectedCategory(category)}
            style={{
              backgroundColor: selectedCategory?.includes(category)
                ? 'rgba(255, 112, 67, 1)'
                : 'rgba(234, 232, 211, 1)',
              borderRadius: 999,
              paddingVertical: 12,
              paddingHorizontal: 24,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: selectedCategory?.includes(category) ? 'white' : '',
              }}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ marginTop: 24 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>
            {monthName}, {year}
          </Text>
          <Ionicons name="chevron-down" size={24} />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            gap: 12,
            marginTop: 24,
          }}
        >
          {next7Days.map((day, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setSelectedDate(day.fullDate)}
              style={{
                backgroundColor: selectedDate?.includes(day.fullDate)
                  ? 'rgba(255, 112, 67, 1)'
                  : 'rgba(234, 232, 211, 1)',
                borderRadius: 16,
                paddingVertical: 12,
                paddingHorizontal: 24,
                alignItems: 'center',
                gap: 16,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: selectedDate?.includes(day.fullDate) ? 'white' : '',
                }}
              >
                {day.dayName}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: selectedDate?.includes(day.fullDate) ? 'white' : '',
                }}
              >
                {day.dayNumber}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 20, fontWeight: 600 }}>4 Tickets Found</Text>
        </View>
        <View style={{ gap: 16 }}>
          {tickets.map(ticket => (
            <View
            key={ticket.id}
              style={{
                backgroundColor: 'white',
                borderRadius: 36,
                flexDirection: 'row',
                overflow: 'hidden',
              }}
            >
              <View
                style={{
                  backgroundColor: 'rgba(255, 112, 67, 1)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 12,
                  paddingHorizontal: 12,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 400,
                    color: 'white',
                    transform: 'rotate(270deg)',
                    marginBottom: 12,
                    textTransform: 'uppercase',
                  }}
                >
                  Airlines
                </Text>
                <View
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 999,
                    backgroundColor: 'rgba(19, 30, 46, 1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FontAwesome6
                    name="plane"
                    iconStyle="solid"
                    size={20}
                    color={'white'}
                  />
                </View>
              </View>
              <View
                style={{ flex: 1, paddingVertical: 16, paddingHorizontal: 24 }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 36, fontWeight: 700 }}>
                      {ticket.from.code}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 400,
                        color: 'rgba(0, 0, 0, 0.6)',
                      }}
                    >
                      {ticket.from.city}
                    </Text>
                  </View>
                  <FontAwesome6
                    name="plane"
                    iconStyle="solid"
                    style={{ transform: 'rotate(315deg)' }}
                    size={24}
                  />
                  <View>
                    <Text style={{ fontSize: 36, fontWeight: 700 }}>
                      {ticket.to.code}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        fontWeight: 400,
                        color: 'rgba(0, 0, 0, 0.6)',
                      }}
                    >
                      {ticket.to.city}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 24,
                  }}
                >
                  <View>
                    <Text style={{ fontSize: 14, fontWeight: 700 }}>
                      {ticket.from.time}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: 'rgba(0, 0, 0, 0.6)',
                      }}
                    >
                      {ticket.from.date}
                    </Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 14, fontWeight: 700 }}>
                      {ticket.to.time}
                    </Text>
                    <Text
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        color: 'rgba(0, 0, 0, 0.6)',
                      }}
                    >
                      {ticket.to.date}
                    </Text>
                  </View>
                </View>
                <Text style={{ fontSize: 16, fontWeight: 600, marginTop: 24 }}>
                  ${ticket.price.toLocaleString('id-ID')}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default Ticket