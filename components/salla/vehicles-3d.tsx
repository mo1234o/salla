'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface Vehicles3DProps {
  onInfoChange?: (info: { tag: string; title: string; desc: string }) => void
}

export function Vehicles3D({ onInfoChange }: Vehicles3DProps) {
  const canvasRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<{ tag: string; title: string; desc: string }>({
    tag: 'مركبتك',
    title: 'تروسيكل',
    desc: 'بيدخل الحواري والشوارع الضيقة ويلف على البيوت والمحلات بأقل مصاريف. سجّل بتروسيكلك كشريك جامع واستلم طلبات قريبة منك.'
  })

  const currentInfoRef = useRef(infoRef.current)
  const onInfoChangeRef = useRef(onInfoChange)

  useEffect(() => {
    onInfoChangeRef.current = onInfoChange
  }, [onInfoChange])

  useEffect(() => {
    const wrap = canvasRef.current
    if (!wrap) return

    const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches

    function clamp(x: number, a: number, b: number) {
      return Math.max(a, Math.min(b, x))
    }

    function easeOutBack(p: number) {
      const c1 = 1.4,
        c3 = c1 + 1
      return 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2)
    }

    function easeInBack(p: number) {
      const c1 = 1.2,
        c3 = c1 + 1
      return c3 * p * p * p - c1 * p * p
    }

    const INFO = {
      tricycle: {
        tag: 'مركبتك',
        title: 'تروسيكل',
        desc: 'بيدخل الحواري والشوارع الضيقة ويلف على البيوت والمحلات بأقل مصاريف. سجّل بتروسيكلك كشريك جامع واستلم طلبات قريبة منك.'
      },
      cart: {
        tag: 'مركبتك',
        title: 'عربية روبابيكيا',
        desc: 'بدل ما تلف تدوّر على الزبون، الطلب بيجيلك: المكان والنوع والكمية قبل ما تتحرك. لفّ أقل وشغل أكتر.'
      },
      truck: {
        tag: 'مركبتك',
        title: 'عربية نص نقل',
        desc: 'للكميات الكبيرة من الشركات والمصانع والمخازن. خد شحنات بالطن واشتغل أكتر في اليوم وبسولار أقل.'
      },
      iron: {
        tag: 'خامة',
        title: 'حديد ومعادن',
        desc: 'حديد ونحاس ومخلفات مصانع بتتطلب بالطن. سجّل كمشتري والخامة توصلك بدل ما تلف تدوّر عليها.'
      },
      plastic: {
        tag: 'خامة',
        title: 'بلاستيك PET وHDPE',
        desc: 'زجاجات وعبوات بتتجمع من البيوت والمحلات وبتتفرز وتتباع بالطن للمصانع.'
      },
      alu: {
        tag: 'خامة',
        title: 'ألومنيوم وكانز',
        desc: 'الكانز الألومنيوم من الخامات المطلوبة في السوق. اطلبه بالطن مفروز، أو اجمعه وبيعه بكاش لحظي في المحفظة.'
      }
    }

    const ORDER = ['tricycle', 'cart', 'truck', 'iron', 'plastic', 'alu'] as const

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      })
    } catch (e) {
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.NoToneMapping
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.position = 'absolute'
    renderer.domElement.style.top = '0'
    renderer.domElement.style.left = '0'
    wrap.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100)
    const camDir = new THREE.Vector3(0.58, 0.34, 0.74).normalize()
    const camTarget = new THREE.Vector3(0, 1.05, 0)

    // انعكاسات فاتحة
    ;(function () {
      const es = new THREE.Scene(),
        geo = new THREE.SphereGeometry(40, 32, 16),
        cols: number[] = [],
        pos = geo.attributes.position
      for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i) / 40,
          c = new THREE.Color()
        if (y > 0) c.setRGB(0.78 + 0.2 * y, 0.86 + 0.12 * y, 0.95 + 0.05 * y)
        else c.setRGB(0.62, 0.68, 0.6)
        cols.push(c.r, c.g, c.b)
      }
      geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3))
      es.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide })))

      function box(x: number, y: number, z: number, w: number, h: number, d: number, c: THREE.Color) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshBasicMaterial({ color: c }))
        m.position.set(x, y, z)
        es.add(m)
      }
      box(0, 26, 0, 34, 1, 14, new THREE.Color(3, 3, 3))
      box(-30, 8, 8, 1, 14, 22, new THREE.Color(2, 2, 2))
      box(30, 8, -8, 1, 12, 18, new THREE.Color(1.6, 1.7, 1.6))

      const pm = new THREE.PMREMGenerator(renderer)
      scene.environment = pm.fromScene(es, 0.02).texture
      pm.dispose()
    })()

    scene.add(new THREE.HemisphereLight(0xffffff, 0xcfe0cb, 0.75))
    const dl = new THREE.DirectionalLight(0xffffff, 1.15)
    dl.position.set(5, 10, 6)
    dl.castShadow = true
    dl.shadow.mapSize.set(1024, 1024)
    dl.shadow.radius = 5
    const sc = dl.shadow.camera
    sc.left = -6
    sc.right = 6
    sc.top = 6
    sc.bottom = -6
    sc.near = 1
    sc.far = 28
    dl.shadow.bias = -0.0004
    scene.add(dl)
    const fill = new THREE.DirectionalLight(0xdfeeff, 0.45)
    fill.position.set(-6, 4, -3)
    scene.add(fill)

    function M(c: number, o?: any) {
      const p = { color: c, roughness: 0.6, metalness: 0.05, envMapIntensity: 0.7 }
      if (o) for (const k in o) p[k] = o[k]
      return new THREE.MeshStandardMaterial(p)
    }

    // ظل ناعم على الأرض
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.22 }))
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    scene.add(ground)

    const turn = new THREE.Group()
    scene.add(turn)

    // أدوات البناء
    const UP = new THREE.Vector3(0, 1, 0)

    function add(g: THREE.Group, geo: THREE.BufferGeometry, mat: THREE.Material, x?: number, y?: number, z?: number, rx?: number, ry?: number, rz?: number) {
      const m = new THREE.Mesh(geo, mat)
      m.position.set(x || 0, y || 0, z || 0)
      m.rotation.set(rx || 0, ry || 0, rz || 0)
      m.castShadow = true
      m.receiveShadow = true
      g.add(m)
      return m
    }

    function box(g: THREE.Group, w: number, h: number, d: number, mat: THREE.Material, x?: number, y?: number, z?: number, rx?: number, ry?: number, rz?: number) {
      return add(g, new THREE.BoxGeometry(w, h, d), mat, x, y, z, rx, ry, rz)
    }

    function cyl(g: THREE.Group, rt: number, rb: number, h: number, mat: THREE.Material, x?: number, y?: number, z?: number, rx?: number, ry?: number, rz?: number, seg?: number) {
      return add(g, new THREE.CylinderGeometry(rt, rb, h, seg || 18), mat, x, y, z, rx, ry, rz)
    }

    function tube(g: THREE.Group, a: number[], b: number[], r: number, mat: THREE.Material) {
      const A = new THREE.Vector3(a[0], a[1], a[2]),
        B = new THREE.Vector3(b[0], b[1], b[2]),
        d = B.clone().sub(A)
      const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, d.length(), 12), mat)
      m.position.copy(A).add(B).multiplyScalar(0.5)
      m.quaternion.setFromUnitVectors(UP, d.normalize())
      m.castShadow = true
      g.add(m)
      return m
    }

    function wheel(g: THREE.Group, x: number, y: number, z: number, R: number, tw: number, tireM: THREE.Material, rimM: THREE.Material, spokes: boolean) {
      const out = new THREE.Group()
      out.position.set(x, y, z)
      const spin = new THREE.Group()
      out.add(spin)
      const tire = new THREE.Mesh(new THREE.TorusGeometry(R - tw, tw, 16, 36), tireM)
      tire.castShadow = true
      spin.add(tire)
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(R - tw * 1.6, R - tw * 1.6, tw * 1.4, 28), rimM)
      disc.rotation.x = Math.PI / 2
      disc.castShadow = true
      spin.add(disc)
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.22, R * 0.22, tw * 2.2, 16), M(0xb9c0c7, { metalness: 0.9, roughness: 0.3 }))
      hub.rotation.x = Math.PI / 2
      spin.add(hub)
      if (spokes) {
        for (let i = 0; i < 6; i++) {
          const sp = new THREE.Mesh(new THREE.BoxGeometry((R - tw) * 1.9, R * 0.08, R * 0.08), rimM)
          sp.rotation.z = (i * Math.PI) / 6
          spin.add(sp)
        }
      }
      g.add(out)
      ;(g.userData as any).spin.push(spin)
      return out
    }

    function sack(g: THREE.Group, col: number, x: number, y: number, z: number, sx: number, sy: number, sz: number, ry?: number) {
      const m = add(g, new THREE.SphereGeometry(0.5, 22, 16), M(col, { roughness: 0.95 }), x, y, z, 0, ry || 0, 0)
      m.scale.set(sx, sy, sz)
      return m
    }

    function bottle(g: THREE.Group, col: number, x: number, y: number, z: number, rx?: number, ry?: number, rz?: number, s?: number) {
      const b = new THREE.Group(),
        mat = M(col, { roughness: 0.1, metalness: 0, transparent: true, opacity: 0.78, envMapIntensity: 1.2 })
      const parts = [
        new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.7, 20), mat),
        new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.2, 0.22, 20), mat),
        new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.1, 14), mat),
        new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.07, 14), M(0x2e9e4f, { roughness: 0.5 }))
      ],
        ys = [0.35, 0.81, 0.97, 1.04]
      parts.forEach(function (m, i) {
        m.position.y = ys[i]
        m.castShadow = true
        b.add(m)
      })
      b.position.set(x, y, z)
      b.rotation.set(rx || 0, ry || 0, rz || 0)
      b.scale.setScalar(s || 1)
      g.add(b)
      return b
    }

    function can(g: THREE.Group, band: number, x: number, y: number, z: number, s?: number) {
      const c = new THREE.Group(),
        al = M(0xdde3ea, { metalness: 0.95, roughness: 0.2, envMapIntensity: 1.1 })
      const m1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.62, 22), al)
      m1.position.y = 0.31
      const m2 = new THREE.Mesh(new THREE.CylinderGeometry(0.206, 0.206, 0.28, 22), M(band, { metalness: 0.35, roughness: 0.4 }))
      m2.position.y = 0.31
      const m3 = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 0.05, 22), al)
      m3.position.y = 0.645
      const m4 = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 0.02, 22), al)
      m4.position.y = 0.68
      ;[m1, m2, m3, m4].forEach(function (m) {
        m.castShadow = true
        c.add(m)
      })
      c.position.set(x, y, z)
      c.scale.setScalar(s || 1)
      g.add(c)
      return c
    }

    function rrect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
      ctx.beginPath()
      ctx.moveTo(x + r, y)
      ctx.arcTo(x + w, y, x + w, y + h, r)
      ctx.arcTo(x + w, y + h, x, y + h, r)
      ctx.arcTo(x, y + h, x, y, r)
      ctx.arcTo(x, y, x + w, y, r)
      ctx.closePath()
    }

    const redraws: (() => void)[] = []

    function signTex(w: number, h: number, draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void) {
      const cv = document.createElement('canvas')
      cv.width = w
      cv.height = h
      const ctx = cv.getContext('2d')!
      const tex = new THREE.CanvasTexture(cv)
      tex.colorSpace = THREE.SRGBColorSpace
      tex.anisotropy = 4
      function d() {
        ctx.clearRect(0, 0, w, h)
        draw(ctx, w, h)
        tex.needsUpdate = true
      }
      d()
      redraws.push(d)
      return tex
    }

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () {
      redraws.forEach(function (f) {
        f()
      })
    })

    function plane(g: THREE.Group, w: number, h: number, tex: THREE.Texture, x: number, y: number, z: number, ry?: number) {
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(w, h),
        new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.6, polygonOffset: true, polygonOffsetFactor: -2 })
      )
      m.position.set(x, y, z)
      m.rotation.y = ry || 0
      g.add(m)
      return m
    }

    function logoPlate() {
      return signTex(512, 200, function (ctx, w, h) {
        ctx.fillStyle = '#ffffff'
        rrect(ctx, 4, 4, w - 8, h - 8, 30)
        ctx.fill()
        ctx.strokeStyle = '#2e9e4f'
        ctx.lineWidth = 8
        rrect(ctx, 12, 12, w - 24, h - 24, 24)
        ctx.stroke()
        ctx.fillStyle = '#1f7a3c'
        ctx.font = '900 96px Cairo,Tahoma,sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.direction = 'rtl'
        ctx.fillText('سلة مصر', w / 2, h / 2 + 4)
      })
    }

    const TIRE = () => M(0x16191d, { roughness: 0.95, envMapIntensity: 0.2 })
    const WSACK = 0xefece4,
      BSACK = 0x3d78c9,
      GSACK = 0x5aa860,
      CARD = 0xc79a62

    // تروسيكل
    function buildTricycle() {
      const g = new THREE.Group()
      ;(g.userData as any).spin = []
      const red = M(0xc8302b, { roughness: 0.35, metalness: 0.25 }),
        blue = M(0x1f5fbf, { roughness: 0.4, metalness: 0.3 }),
        dark = M(0x1d2024, { roughness: 0.6, metalness: 0.4 }),
        chrome = M(0xd0d6dc, { metalness: 0.95, roughness: 0.18, envMapIntensity: 1.2 }),
        seatM = M(0x25282c, { roughness: 0.8 }),
        wood = M(0xb98a52, { roughness: 0.85 })
      wheel(g, -1.0, 0.42, 0.82, 0.42, 0.12, TIRE(), M(0x2a6fd0, { metalness: 0.4, roughness: 0.4 }), false)
      wheel(g, -1.0, 0.42, -0.82, 0.42, 0.12, TIRE(), M(0x2a6fd0, { metalness: 0.4, roughness: 0.4 }), false)
      wheel(g, 1.55, 0.38, 0, 0.38, 0.11, TIRE(), M(0xc8302b, { metalness: 0.4, roughness: 0.4 }), false)
      cyl(g, 0.05, 0.05, 1.7, chrome, -1.0, 0.42, 0, Math.PI / 2, 0, 0, 12)
      box(g, 2.0, 0.1, 1.7, wood, -1.1, 0.88, 0)
      box(g, 2.0, 0.55, 0.07, blue, -1.1, 1.2, 0.85)
      box(g, 2.0, 0.55, 0.07, blue, -1.1, 1.2, -0.85)
      box(g, 0.07, 0.55, 1.7, blue, -2.1, 1.2, 0)
      box(g, 0.07, 0.7, 1.7, blue, -0.1, 1.28, 0)
      ;[-1.6, -1.1, -0.6].forEach(function (x) {
        box(g, 0.06, 0.5, 0.08, M(0x174a95), x, 1.2, 0.87)
        box(g, 0.06, 0.5, 0.08, M(0x174a95), x, 1.2, -0.87)
      })
      tube(g, [-1.0, 0.45, 0.45], [-1.0, 0.86, 0.45], 0.04, dark)
      tube(g, [-1.0, 0.45, -0.45], [-1.0, 0.86, -0.45], 0.04, dark)
      box(g, 1.0, 0.5, 0.7, red, 0.5, 0.95, 0)
      box(g, 0.7, 0.12, 0.46, red, 1.0, 0.72, 0)
      box(g, 0.8, 0.1, 0.5, red, 1.58, 0.82, 0)
      tube(g, [1.55, 0.38, 0.14], [1.35, 1.28, 0.14], 0.04, chrome)
      tube(g, [1.55, 0.38, -0.14], [1.35, 1.28, -0.14], 0.04, chrome)
      cyl(g, 0.03, 0.03, 1.1, dark, 1.35, 1.3, 0, Math.PI / 2, 0, 0, 10)
      add(g, new THREE.SphereGeometry(0.07, 12, 10), dark, 1.35, 1.3, 0.56)
      add(g, new THREE.SphereGeometry(0.07, 12, 10), dark, 1.35, 1.3, -0.56)
      const lamp = add(g, new THREE.SphereGeometry(0.14, 16, 12), M(0xfff6c4, { emissive: 0xffe9a0, emissiveIntensity: 0.7 }), 1.5, 1.05, 0)
      lamp.scale.set(0.7, 1, 1)
      box(g, 0.7, 0.14, 0.95, seatM, 0.0, 1.1, 0)
      box(g, 0.08, 0.45, 0.95, seatM, -0.32, 1.38, 0)
      tube(g, [0.2, 0.7, 0.25], [0.2, 1.05, 0.25], 0.04, dark)
      cyl(g, 0.05, 0.05, 1.3, chrome, -0.55, 0.55, -0.45, 0, 0, Math.PI / 2, 12)
      box(g, 0.35, 0.28, 0.4, dark, 0.0, 0.75, 0)
      sack(g, WSACK, -1.0, 1.4, 0.4, 1.0, 0.8, 0.9, 0.4)
      sack(g, BSACK, -1.65, 1.38, -0.3, 0.95, 0.8, 1.0, -0.3)
      sack(g, GSACK, -0.65, 1.35, -0.4, 0.85, 0.72, 0.9, 0.9)
      box(g, 0.8, 0.55, 0.65, M(CARD, { roughness: 0.9 }), -1.7, 1.5, 0.38, 0, 0.25, 0)
      box(g, 0.6, 0.45, 0.55, M(0xd5ac76, { roughness: 0.9 }), -1.3, 2.0, 0.0, 0, -0.2, 0)
      bottle(g, 0x7cc8f0, -0.45, 1.05, 0.15, 0, 0, -Math.PI / 2 + 0.1, 0.8)
      bottle(g, 0xa7e0a4, -0.55, 1.17, -0.2, 0, 0.5, -Math.PI / 2, 0.8)
      return g
    }

    // عربية روبابيكيا
    function buildCart() {
      const g = new THREE.Group()
      ;(g.userData as any).spin = []
      const wood = M(0xb98a52, { roughness: 0.88 }),
        dwood = M(0x7e5733, { roughness: 0.9 }),
        rim = M(0x8a5f36, { roughness: 0.8 }),
        steel = M(0xbfc6cd, { metalness: 0.9, roughness: 0.3 })
      wheel(g, 0, 0.82, 1.12, 0.82, 0.09, TIRE(), rim, true)
      wheel(g, 0, 0.82, -1.12, 0.82, 0.09, TIRE(), rim, true)
      cyl(g, 0.06, 0.06, 2.4, steel, 0, 0.82, 0, Math.PI / 2, 0, 0, 12)
      box(g, 2.9, 0.12, 1.9, wood, 0, 1.12, 0)
      box(g, 2.9, 0.4, 0.08, dwood, 0, 1.38, 0.95)
      box(g, 2.9, 0.4, 0.08, dwood, 0, 1.38, -0.95)
      box(g, 0.08, 0.4, 1.9, dwood, -1.45, 1.38, 0)
      box(g, 0.08, 0.22, 1.9, dwood, 1.45, 1.27, 0)
      tube(g, [1.35, 1.08, 0.62], [3.1, 0.72, 0.5], 0.065, dwood)
      tube(g, [1.35, 1.08, -0.62], [3.1, 0.72, -0.5], 0.065, dwood)
      tube(g, [3.1, 0.72, 0.5], [3.1, 0.72, -0.5], 0.055, dwood)
      tube(g, [-1.2, 1.05, 0.75], [-1.5, 0.05, 0.75], 0.05, dwood)
      tube(g, [-1.2, 1.05, -0.75], [-1.5, 0.05, -0.75], 0.05, dwood)
      const st = signTex(512, 128, function (ctx, w, h) {
        ctx.fillStyle = '#f3c623'
        rrect(ctx, 2, 2, w - 4, h - 4, 18)
        ctx.fill()
        ctx.strokeStyle = '#1d2a38'
        ctx.lineWidth = 6
        rrect(ctx, 10, 10, w - 20, h - 20, 12)
        ctx.stroke()
        ctx.fillStyle = '#1d2a38'
        ctx.font = '900 78px Cairo,Tahoma,sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.direction = 'rtl'
        ctx.fillText('روبابيكيا', w / 2, h / 2 + 4)
      })
      plane(g, 1.7, 0.4, st, 0, 1.4, 0.995, 0)
      plane(g, 1.7, 0.4, st, 0, 1.4, -0.995, Math.PI)
      box(g, 0.85, 1.6, 0.8, M(0xf1f4f5, { roughness: 0.3, metalness: 0.3 }), -0.75, 2.0, -0.3, 0, 0.2, 0.04)
      box(g, 0.05, 0.55, 0.05, M(0x8b959c, { metalness: 0.8, roughness: 0.3 }), -0.28, 2.2, 0.12, 0, 0.2, 0.04)
      box(g, 0.95, 0.95, 0.9, M(0xe4e8ea, { roughness: 0.3, metalness: 0.3 }), 0.5, 1.7, 0.35, 0, -0.25, 0)
      cyl(g, 0.26, 0.26, 0.05, M(0x4a6d8a, { roughness: 0.2, metalness: 0.2 }), 0.62, 1.72, 0.82, Math.PI / 2, 0, 0, 22)
      cyl(g, 0.2, 0.2, 1.9, M(0xa5483c, { roughness: 0.95 }), 0.2, 1.4, -0.62, 0, 0, Math.PI / 2, 20)
      box(g, 0.6, 0.08, 0.6, wood, 1.05, 1.58, -0.4, 0, 0.3, 0)
      box(g, 0.6, 0.7, 0.08, wood, 1.0, 1.98, -0.65, 0, 0.3, 0)
      ;[
        [-0.25, -0.25],
        [0.25, -0.25],
        [-0.25, 0.25],
        [0.25, 0.25]
      ].forEach(function (o) {
        tube(g, [1.05 + o[0] * 0.9, 1.18, -0.4 + o[1] * 0.9], [1.05 + o[0] * 0.9, 1.55, -0.4 + o[1] * 0.9], 0.03, wood)
      })
      sack(g, WSACK, -1.05, 1.55, 0.55, 1.0, 0.8, 0.9, 0.5)
      sack(g, BSACK, 1.0, 1.45, 0.6, 0.9, 0.65, 0.8, 0.2)
      sack(g, GSACK, -0.3, 1.5, 0.62, 0.8, 0.6, 0.75, 0)
      box(g, 0.7, 0.5, 0.6, M(CARD, { roughness: 0.9 }), 1.1, 1.55, 0.12, 0, 0.15, 0)
      tube(g, [-1.4, 1.25, 0.8], [1.1, 2.6, 0.15], 0.03, M(0xd9c9a3, { roughness: 1 }))
      return g
    }

    // نص نقل
    function buildTruck() {
      const g = new THREE.Group()
      ;(g.userData as any).spin = []
      const white = M(0xf4f6f7, { roughness: 0.28, metalness: 0.3 }),
        blue = M(0x1d55a3, { roughness: 0.4, metalness: 0.35 }),
        glass = M(0x9cc7e6, { roughness: 0.05, metalness: 0.5, transparent: true, opacity: 0.85, envMapIntensity: 1.4 }),
        dark = M(0x1b1e22, { roughness: 0.6, metalness: 0.4 }),
        chrome = M(0xd5dbe0, { metalness: 0.95, roughness: 0.18, envMapIntensity: 1.2 }),
        rimM = M(0xc9cfd5, { metalness: 0.9, roughness: 0.3 }),
        bed = M(0x8a6a44, { roughness: 0.85 })
      box(g, 4.5, 0.24, 1.5, dark, 0, 0.64, 0)
      box(g, 1.35, 0.78, 1.62, white, 1.0, 1.16, 0)
      box(g, 1.0, 0.62, 1.52, white, 0.85, 1.8, 0)
      box(g, 0.05, 0.46, 1.3, glass, 1.37, 1.8, 0, 0, 0, 0.3)
      box(g, 0.7, 0.44, 0.03, glass, 0.83, 1.82, 0.77)
      box(g, 0.7, 0.44, 0.03, glass, 0.83, 1.82, -0.77)
      box(g, 0.03, 0.5, 0.03, dark, 0.36, 1.8, 0.78)
      box(g, 0.03, 0.5, 0.03, dark, 0.36, 1.8, -0.78)
      box(g, 0.95, 0.46, 1.62, white, 1.9, 1.0, 0)
      box(g, 0.05, 0.3, 1.0, dark, 2.4, 1.0, 0)
      box(g, 0.05, 0.04, 1.1, chrome, 2.41, 1.1, 0)
      box(g, 0.05, 0.04, 1.1, chrome, 2.41, 0.92, 0)
      box(g, 0.18, 0.2, 1.8, chrome, 2.46, 0.64, 0)
      const hl = M(0xffffff, { emissive: 0xfff0b8, emissiveIntensity: 0.6, roughness: 0.2 })
      box(g, 0.06, 0.16, 0.34, hl, 2.42, 1.06, 0.62)
      box(g, 0.06, 0.16, 0.34, hl, 2.42, 1.06, -0.62)
      box(g, 0.18, 0.1, 0.1, dark, 1.3, 1.62, 1.0)
      box(g, 0.18, 0.1, 0.1, dark, 1.3, 1.62, -1.0)
      box(g, 2.5, 0.1, 1.62, bed, -0.98, 0.8, 0)
      box(g, 2.5, 0.62, 0.09, blue, -0.98, 1.16, 0.78)
      box(g, 2.5, 0.62, 0.09, blue, -0.98, 1.16, -0.78)
      box(g, 0.09, 0.62, 1.62, blue, -2.2, 1.16, 0)
      box(g, 2.54, 0.05, 0.13, chrome, -0.98, 1.5, 0.78)
      box(g, 2.54, 0.05, 0.13, chrome, -0.98, 1.5, -0.78)
      box(g, 0.07, 0.9, 1.62, blue, 0.28, 1.26, 0)
      ;[1.75, -1.25].forEach(function (x) {
        ;[0.9, -0.9].forEach(function (z) {
          cyl(g, 0.62, 0.62, 0.05, dark, x, 0.55, z > 0 ? 0.84 : -0.84, Math.PI / 2, 0, 0, 28)
          wheel(g, x, 0.5, z, 0.5, 0.14, TIRE(), rimM, false)
        })
      })
      const plate = logoPlate()
      plane(g, 0.95, 0.37, plate, 1.0, 1.2, 0.815, 0)
      plane(g, 0.95, 0.37, plate, 1.0, 1.2, -0.815, Math.PI)
      const rust = M(0xa0522d, { metalness: 0.55, roughness: 0.55 })
      for (let r = 0; r < 3; r++)
        for (let c = 0; c < 3 - r; c++) cyl(g, 0.06, 0.06, 2.2, rust, -1.0, 0.95 + r * 0.12, -0.5 + c * 0.14 + r * 0.07, 0, 0, Math.PI / 2, 10)
      box(g, 1.0, 0.7, 1.0, M(0x4f9b5b, { roughness: 0.9 }), -1.4, 1.35, 0.22, 0, 0.05, 0)
      ;[-0.25, 0.25].forEach(function (o) {
        box(g, 1.02, 0.72, 0.05, M(0xd9c9a3, { roughness: 1 }), -1.4 + o, 1.35, 0.22, 0, 0.05, 0)
      })
      sack(g, WSACK, -0.35, 1.25, 0.35, 1.0, 0.85, 0.95, 0.3)
      sack(g, BSACK, -0.3, 1.25, -0.4, 0.95, 0.8, 0.9, -0.4)
      sack(g, GSACK, -0.4, 1.8, 0, 0.9, 0.7, 0.85, 0)
      box(g, 0.65, 0.5, 0.6, M(CARD, { roughness: 0.9 }), -1.9, 1.1, -0.4, 0, 0.4, 0)
      return g
    }

    // حديد
    function buildIron() {
      const g = new THREE.Group()
      ;(g.userData as any).spin = []
      const rust = M(0xb4552c, { metalness: 0.5, roughness: 0.55 }),
        steel = M(0x7f8c99, { metalness: 0.85, roughness: 0.35, envMapIntensity: 1 }),
        dsteel = M(0x4d5760, { metalness: 0.85, roughness: 0.4 }),
        blueSteel = M(0x4a6f93, { metalness: 0.8, roughness: 0.4 })
      for (let r = 0; r < 3; r++) {
        const cnt = 5 - r
        for (let c = 0; c < cnt; c++) cyl(g, 0.065, 0.065, 3.4, rust, 0, 0.07 + r * 0.125, -1.3 + (c - (cnt - 1) / 2) * 0.15, 0, 0, Math.PI / 2, 12)
      }
      ;[-1.0, 1.0].forEach(function (x) {
        box(g, 0.04, 0.5, 0.62, M(0x20242a, { roughness: 0.8 }), x, 0.19, -1.3)
      })
      function ibeam(z: number, y: number, mat: THREE.Material) {
        const b = new THREE.Group()
        ;[
          [3, 0.08, 0.42, 0.25],
          [3, 0.08, 0.42, -0.25],
          [3, 0.5, 0.08, 0]
        ].forEach(function (p) {
          const m = new THREE.Mesh(new THREE.BoxGeometry(p[0] as number, p[1] as number, p[2] as number), mat)
          if (p[1] === 0.08) m.position.y = p[3] as number
          m.castShadow = true
          b.add(m)
        })
        b.position.set(0, y, z)
        g.add(b)
        return b
      }
      ibeam(-0.3, 0.29, blueSteel)
      ibeam(0.4, 0.29, steel)
      const gear = new THREE.Group()
      const gb = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.22, 30), dsteel)
      gb.castShadow = true
      gear.add(gb)
      const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.26, 0.24, 20), M(0x16181b, { roughness: 0.9 }))
      gear.add(hole)
      for (let i = 0; i < 14; i++) {
        const t = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.22, 0.26), dsteel),
          a = (i / 14) * Math.PI * 2
        t.position.set(Math.cos(a) * 0.88, 0, Math.sin(a) * 0.88)
        t.rotation.y = -a
        t.castShadow = true
        gear.add(t)
      }
      gear.position.set(0.6, 0.12, 1.5)
      g.add(gear)
      const pm = new THREE.MeshStandardMaterial({ color: 0x8794a0, metalness: 0.85, roughness: 0.35, side: THREE.DoubleSide, envMapIntensity: 0.9 })
      ;[
        [1.95, 0.23],
        [2.45, 0.23],
        [2.2, 0.62]
      ].forEach(function (p) {
        const pc = new THREE.Mesh(new THREE.CylinderGeometry(0.23, 0.23, 1.9, 26, 1, true), pm)
        pc.rotation.x = Math.PI / 2
        pc.position.set(p[0], p[1], 0.95)
        pc.castShadow = true
        g.add(pc)
      })
      for (let k = 0; k < 3; k++) box(g, 1.5, 0.06, 1.0, k % 2 ? steel : rust, -1.3, 0.03 + k * 0.065, 1.35, 0, k * 0.18 - 0.1, 0)
      return g
    }

    // بلاستيك
    function buildPlastic() {
      const g = new THREE.Group()
      ;(g.userData as any).spin = []
      box(g, 2.7, 0.14, 2.3, M(0xb98a52, { roughness: 0.9 }), 0, 0.07, 0)
      const cols = [0x7cc8f0, 0xa7e0a4, 0xeaf6f8]
      for (let x = 0; x < 4; x++)
        for (let z = 0; z < 3; z++) bottle(g, cols[(x + z) % 3], -0.9 + x * 0.6, 0.14, -0.6 + z * 0.6, 0, 0, 0, 0.9)
      box(g, 1.3, 0.95, 1.0, M(0x4d9ad0, { roughness: 0.8 }), 2.4, 0.5, 0.3, 0, 0.1, 0)
      ;[-0.4, 0, 0.4].forEach(function (o) {
        box(g, 1.32, 0.05, 1.02, M(0x1d2a38), 2.4, 0.5 + o, 0.3, 0, 0.1, 0)
      })
      ;[
        [-2.35, 0.3],
        [-2.35, -0.4],
        [-2.0, 0.5]
      ].forEach(function (p, i) {
        const jug = new THREE.Group(),
          mat = M(i % 2 ? 0x2f6fc2 : 0xf5f7f8, { roughness: 0.35 })
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.65, 0.4), mat)
        b.position.y = 0.33
        b.castShadow = true
        jug.add(b)
        const cp = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.1, 14), M(0xff8f2b))
        cp.position.set(0.12, 0.7, 0)
        jug.add(cp)
        const h = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.03, 8, 18, Math.PI), mat)
        h.position.set(-0.1, 0.66, 0)
        jug.add(h)
        jug.position.set(p[0], 0, p[1])
        jug.rotation.y = i * 0.5
        g.add(jug)
      })
      const barrel = new THREE.Group(),
        bm = M(0x2f6fc2, { roughness: 0.4 })
      const bb = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 1.0, 28), bm)
      bb.position.y = 0.5
      bb.castShadow = true
      barrel.add(bb)
      ;[0.2, 0.5, 0.8].forEach(function (y) {
        const rg = new THREE.Mesh(new THREE.TorusGeometry(0.43, 0.03, 8, 28), bm)
        rg.rotation.x = Math.PI / 2
        rg.position.y = y
        barrel.add(rg)
      })
      barrel.position.set(-1.4, 0, -1.55)
      g.add(barrel)
      box(g, 0.7, 0.45, 0.5, M(0xd23b3b, { roughness: 0.6 }), 1.2, 0.22, -1.5, 0, 0.2, 0)
      bottle(g, 0x7cc8f0, 0.2, 0.6, -0.1, 0, 0, -Math.PI / 2 + 0.1, 0.85)
      bottle(g, 0xa7e0a4, -0.3, 0.6, 0.2, 0, 0.8, -Math.PI / 2, 0.85)
      bottle(g, 0xeaf6f8, 0.6, 0.62, 0.3, 0, -0.5, -Math.PI / 2, 0.85)
      return g
    }

    // ألومنيوم
    function buildAlu() {
      const g = new THREE.Group()
      ;(g.userData as any).spin = []
      const bands = [0xd7263d, 0x1b6ec2, 0x2da44e, 0xf08a24, 0x7a3fb5]
      const layer = [4, 3, 2, 1],
        n = 0
      for (let L = 0; L < 4; L++) {
        const cnt = layer[L],
          sp = 0.44,
          off = ((cnt - 1) * sp) / 2
        for (let x = 0; x < cnt; x++)
          for (let z = 0; z < cnt; z++) can(g, bands[(n as number) % 5], x * sp - off, L * 0.64, z * sp - off, 1)
      }
      const ig = new THREE.CylinderGeometry(0.34, 0.5, 0.3, 4)
      ig.rotateY(Math.PI / 4)
      const alm = M(0xe3e8ee, { metalness: 1, roughness: 0.2, envMapIntensity: 1.2 })
      ;[
        [2.1, 0.5],
        [2.1, -0.3],
        [2.6, 0.1]
      ].forEach(function (p, i) {
        const m = add(g, ig, alm, p[0], 0.15 + (i === 2 ? 0.3 : 0), p[1])
        m.scale.set(1.5, 1, 1)
      })
      box(g, 1.1, 0.85, 0.85, M(0xc0c7cf, { metalness: 0.65, roughness: 0.5 }), -2.2, 0.43, 0.2, 0, 0.2, 0)
      ;[-0.28, 0, 0.28].forEach(function (o) {
        box(g, 1.12, 0.045, 0.87, M(0x3a424a, { metalness: 0.6, roughness: 0.5 }), -2.2, 0.43 + o, 0.2, 0, 0.2, 0)
      })
      can(g, 0xd7263d, -0.8, 0, 1.5, 1)
      can(g, 0x1b6ec2, -0.3, 0.21, 1.7, 1).rotation.z = Math.PI / 2
      can(g, 0x2da44e, 0.5, 0.21, 1.6, 1).rotation.set(0, 0.6, Math.PI / 2)
      return g
    }

    const BUILD: Record<string, () => THREE.Group> = {
      tricycle: buildTricycle,
      cart: buildCart,
      truck: buildTruck,
      iron: buildIron,
      plastic: buildPlastic,
      alu: buildAlu
    }

    const cache: Record<string, { g: THREE.Group; wrap: THREE.Group; key: string }> = {}

    function fit(g: THREE.Group) {
      const w = new THREE.Group()
      w.add(g)
      const b = new THREE.Box3().setFromObject(g),
        s = new THREE.Vector3()
      b.getSize(s)
      const k = Math.min(4.6 / Math.max(s.x, s.z), 3.3 / s.y)
      g.scale.setScalar(k)
      b.setFromObject(g)
      const c = new THREE.Vector3()
      b.getCenter(c)
      g.position.set(-c.x, -b.min.y, -c.z)
      return w
    }

    function getModel(k: string) {
      if (!cache[k]) {
        const g = BUILD[k]()
        cache[k] = { g, wrap: fit(g), key: k }
      }
      return cache[k]
    }

    // التعاقب التلقائي
    let idx = 0,
      cur: { g: THREE.Group; wrap: THREE.Group; key: string } | null = null,
      phase = 'in',
      pt = 0,
      HOLD = 4.8,
      isVis = false,
      running = false
    let rotY = -0.6,
      vel = 0,
      dragging = false,
      lastX = 0,
      lastDrag = -1e9

    function mount(k: string) {
      if (cur) turn.remove(cur.wrap)
      cur = getModel(k)
      turn.add(cur.wrap)
      cur.wrap.scale.setScalar(0.0001)
      // Update info
      const d = INFO[k]
      currentInfoRef.current = d
      // Call React callback
      if (onInfoChangeRef.current) {
        onInfoChangeRef.current(d)
      }
    }

    const dom = renderer.domElement
    dom.addEventListener('pointerdown', function (e) {
      dragging = true
      lastX = e.clientX
      lastDrag = performance.now()
      try {
        dom.setPointerCapture(e.pointerId)
      } catch (_) {}
    })
    dom.addEventListener('pointermove', function (e) {
      if (!dragging) return
      const dx = e.clientX - lastX
      lastX = e.clientX
      rotY += dx * 0.012
      vel = dx * 0.012
      lastDrag = performance.now()
    })
    function up() {
      dragging = false
    }
    dom.addEventListener('pointerup', up)
    dom.addEventListener('pointercancel', up)

    function resize() {
      const w = wrap.clientWidth,
        h = wrap.clientHeight
      if (!w || !h) return
      const maxWidth = Math.min(w, 600)
      const maxHeight = Math.min(h, 400)
      renderer.setSize(maxWidth, maxHeight, false)
      camera.aspect = maxWidth / maxHeight
      const dist = 12.2 * (maxWidth / maxHeight < 1.1 ? 1.1 / (maxWidth / maxHeight) * 0.92 : 1)
      camera.position.copy(camDir).multiplyScalar(dist).add(camTarget)
      camera.lookAt(camTarget)
      camera.updateProjectionMatrix()
    }
    if ('ResizeObserver' in window) new ResizeObserver(resize).observe(wrap)
    else window.addEventListener('resize', resize)
    resize()

    const clock = new THREE.Clock()

    function frame() {
      if (!isVis) {
        running = false
        return
      }
      requestAnimationFrame(frame)
      const dt = Math.min(clock.getDelta(), 0.05)
      pt += dt
      let s = 1,
        py = 0
      if (phase === 'in') {
        const p = clamp(pt / 0.9, 0, 1)
        s = Math.max(0.0001, easeOutBack(p))
        py = (1 - p) * 1.2
        if (p >= 1) {
          phase = 'hold'
          pt = 0
        }
      } else if (phase === 'hold') {
        s = 1
        if (pt >= HOLD) {
          phase = 'out'
          pt = 0
        }
      } else {
        const q = clamp(pt / 0.5, 0, 1)
        s = Math.max(0.0001, 1 - easeInBack(q) * 0.999)
        py = q * 0.6
        if (q >= 1) {
          idx = (idx + 1) % ORDER.length
          mount(ORDER[idx])
          phase = 'in'
          pt = 0
          s = 0.0001
        }
      }
      if (cur) {
        cur.wrap.scale.setScalar(s)
        cur.wrap.position.y = py
        const sp = cur.g.userData.spin as THREE.Group[],
          ang = (phase === 'hold' || phase === 'in') && idx < 3 ? dt * 1.6 : 0
        for (let i = 0; i < sp.length; i++) sp[i].rotation.z -= ang
      }
      if (!dragging) {
        vel *= 0.94
        rotY += vel
        if (performance.now() - lastDrag > 2000) rotY += dt * 0.32
      }
      turn.rotation.y = rotY
      renderer.render(scene, camera)
    }

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(
        function (es) {
          isVis = es[0].isIntersecting
          if (isVis && !running) {
            running = true
            clock.getDelta()
            frame()
          }
        },
        { threshold: 0.05 }
      ).observe(wrap)
    } else {
      isVis = true
      running = true
      frame()
    }

    mount(ORDER[0])

    return () => {
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-full min-h-[400px] overflow-hidden" style={{ position: 'relative' }}>
      <div ref={canvasRef} className="w-full h-full" id="sp-canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>
  )
}
