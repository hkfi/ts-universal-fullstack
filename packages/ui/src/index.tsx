'use client'

import type { ReactNode } from 'react'
import { Text as NativeText, Pressable, StyleSheet, View } from 'react-native'

type StackProps = {
  children: ReactNode
  direction?: 'row' | 'column'
  gap?: number
  wrap?: boolean
}

export function Screen({ children }: { children: ReactNode }) {
  return <View style={styles.screen}>{children}</View>
}

export function Stack({ children, direction = 'column', gap = 16, wrap = false }: StackProps) {
  return (
    <View
      style={[styles.stack, { flexDirection: direction, gap, flexWrap: wrap ? 'wrap' : 'nowrap' }]}
    >
      {children}
    </View>
  )
}

export function Title({ children }: { children: ReactNode }) {
  return <NativeText style={styles.title}>{children}</NativeText>
}

export function Text({
  children,
  tone = 'default',
  weight = '400',
}: {
  children: ReactNode
  tone?: 'default' | 'muted'
  weight?: '400' | '700'
}) {
  return (
    <NativeText style={[styles.text, tone === 'muted' && styles.mutedText, { fontWeight: weight }]}>
      {children}
    </NativeText>
  )
}

export function AppButton({
  label,
  onPress,
  variant = 'primary',
}: {
  label: string
  onPress: () => void
  variant?: 'primary' | 'secondary'
}) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.button, variant === 'secondary' && styles.secondaryButton]}
    >
      <NativeText
        style={[styles.buttonText, variant === 'secondary' && styles.secondaryButtonText]}
      >
        {label}
      </NativeText>
    </Pressable>
  )
}

export function Card({ title, value }: { title: string; value: string }) {
  return (
    <View style={styles.card}>
      <NativeText style={styles.cardTitle}>{title}</NativeText>
      <NativeText style={styles.cardValue}>{value}</NativeText>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    minHeight: '100%',
    paddingHorizontal: 24,
    paddingVertical: 64,
    backgroundColor: '#f6f7f8',
  },
  stack: {
    maxWidth: 960,
  },
  title: {
    maxWidth: 760,
    color: '#16181d',
    fontSize: 48,
    fontWeight: '700',
    letterSpacing: 0,
    lineHeight: 56,
  },
  text: {
    maxWidth: 680,
    color: '#3a404b',
    fontSize: 18,
    lineHeight: 28,
  },
  mutedText: {
    color: '#6b7280',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  button: {
    minHeight: 44,
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#16181d',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  secondaryButton: {
    borderColor: '#c8ced8',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
  secondaryButtonText: {
    color: '#16181d',
  },
  card: {
    minWidth: 180,
    borderColor: '#d9dee7',
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: '#ffffff',
    padding: 18,
  },
  cardTitle: {
    color: '#6b7280',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  cardValue: {
    marginTop: 8,
    color: '#16181d',
    fontSize: 20,
    fontWeight: '700',
  },
})
