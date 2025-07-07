import React, { useState } from 'react';
import { Cable, Lightbulb, Camera, Wrench, House, Shield, ArrowLeft } from 'lucide-react';

const ProductCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const categories = [
    {
      icon: <Cable size={48} />,
      title: "Cables & Wires",
      description: "Single-core, multi-core, armored cables, data cables, and specialized wiring solutions",
      products: [
        { 
          name: "Single Core Cable 2.5mm", 
          price: "KSh 45/meter", 
          specs: "Copper conductor, PVC insulated", 
          image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop",
          fullSpecs: "Conductor: Annealed copper wire class 1\nInsulation: PVC compound type TI1\nVoltage Rating: 450/750V\nTemperature Rating: 70°C\nColor: Red, Black, Blue, Yellow\nStandards: IEC 60227, BS 6004\nApplications: Fixed wiring in conduits"
        },
        { 
          name: "Multi Core Cable 4x2.5mm", 
          price: "KSh 180/meter", 
          specs: "4-core copper, PVC sheathed", 
          image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop",
          fullSpecs: "Conductor: 4 x 2.5mm² annealed copper\nInsulation: PVC compound\nSheath: PVC compound black\nVoltage Rating: 450/750V\nTemperature Rating: 70°C\nStandards: IEC 60227\nApplications: Power distribution, machinery"
        },
        { 
          name: "Armored Cable 6mm", 
          price: "KSh 280/meter", 
          specs: "Steel wire armored, XLPE insulated", 
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
          fullSpecs: "Conductor: Copper conductor 6mm²\nInsulation: XLPE (Cross-linked polyethylene)\nArmor: Steel wire armor (SWA)\nSheath: PVC black\nVoltage Rating: 0.6/1kV\nApplications: Underground, direct burial"
        },
        { 
          name: "Data Cable Cat6", 
          price: "KSh 85/meter", 
          specs: "Ethernet networking cable", 
          image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300&h=200&fit=crop",
          fullSpecs: "Category: Cat6 UTP\nConductor: 23AWG solid copper\nBandwidth: 250MHz\nSpeed: 1000Mbps (1Gbps)\nJacket: PVC or LSZH\nStandards: TIA/EIA-568-B, ISO/IEC 11801\nApplications: Ethernet networks, data centers"
        },
        { 
          name: "Coaxial Cable RG6", 
          price: "KSh 65/meter", 
          specs: "75 ohm impedance, TV/satellite", 
          image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
          fullSpecs: "Type: RG6 Coaxial\nImpedance: 75 ohms\nCenter Conductor: Copper clad steel\nDielectric: Foam polyethylene\nShield: Aluminum foil + braided wire\nJacket: PVC white\nApplications: Satellite TV, CCTV, broadband"
        }
      ],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
    },
    {
      icon: <Wrench size={48} />,
      title: "Electrical Accessories",
      description: "Switches, sockets, circuit breakers, distribution boards, and installation accessories",
      products: [
        { 
          name: "Wall Switch 2-Gang", 
          price: "KSh 320", 
          specs: "10A rating, modern design", 
          image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=200&fit=crop",
          fullSpecs: "Rating: 10A 250V AC\nGangs: 2-gang 1-way\nMaterial: PC (Polycarbonate)\nColor: White, Champagne\nMounting: Standard back box\nStandards: BS 3676\nFeatures: Easy wiring terminals, LED indicator option"
        },
        { 
          name: "Socket Outlet 13A", 
          price: "KSh 280", 
          specs: "British standard, earthed", 
          image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=200&fit=crop",
          fullSpecs: "Rating: 13A 250V AC\nType: BS 1363 3-pin socket\nEarth: Yes, safety earth pin\nShutter: Child safety shutters\nMaterial: Impact resistant plastic\nColor: White\nMounting: Single or double back box\nSafety: Conforms to BS 1363 standards"
        },
        { 
          name: "Circuit Breaker 32A", 
          price: "KSh 450", 
          specs: "MCB type, DIN rail mount", 
          image: "https://images.unsplash.com/photo-1621905494513-5cae968c7dca?w=300&h=200&fit=crop",
          fullSpecs: "Type: Miniature Circuit Breaker (MCB)\nRating: 32A, B/C curve\nPoles: Single pole\nVoltage: 240V AC\nBreaking Capacity: 6kA\nMounting: 35mm DIN rail\nStandards: IEC 60898\nTrip: Thermal-magnetic protection"
        },
        { 
          name: "Distribution Board 12-Way", 
          price: "KSh 2,800", 
          specs: "Metal enclosure, TPN", 
          image: "https://images.unsplash.com/photo-1621905494513-5cae968c7dca?w=300&h=200&fit=crop",
          fullSpecs: "Ways: 12-way MCB distribution\nType: Three Phase + Neutral (TPN)\nEnclosure: Metal IP40 rated\nBusbar: Copper busbar system\nMain Switch: 63A TPN isolator\nDIN Rail: 35mm standard rail\nDoor: Lockable transparent door\nStandards: IEC 61439"
        },
        { 
          name: "Conduit PVC 25mm", 
          price: "KSh 180/meter", 
          specs: "Electrical conduit piping", 
          image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=200&fit=crop",
          fullSpecs: "Size: 25mm internal diameter\nMaterial: PVC (Polyvinyl Chloride)\nType: Heavy duty electrical conduit\nColor: Orange (electrical grade)\nLength: 3 meter lengths\nFittings: Compatible with standard fittings\nStandards: BS 4607\nApplications: Cable protection, surface/embedded"
        }
      ],
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop"
    },
    {
      icon: <Lightbulb size={48} />,
      title: "Lighting Solutions",
      description: "LED bulbs, floodlights, chandeliers, security lights, and energy-efficient lighting",
      products: [
        { 
          name: "LED Bulb 12W", 
          price: "KSh 380", 
          specs: "E27 base, 1200 lumens, cool white", 
          image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=200&fit=crop",
          fullSpecs: "Power: 12W LED\nLuminous Flux: 1200 lumens\nBase: E27 Edison screw\nColor Temperature: 6500K (Cool White)\nBeam Angle: 220°\nLifespan: 25,000 hours\nDimmable: No\nEnergy Rating: A++\nEquivalent: Replaces 100W incandescent"
        },
        { 
          name: "LED Floodlight 50W", 
          price: "KSh 2,200", 
          specs: "IP65 rated, outdoor use", 
          image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=200&fit=crop",
          fullSpecs: "Power: 50W LED\nLuminous Flux: 4500 lumens\nIP Rating: IP65 (dust/water resistant)\nColor Temperature: 6000K daylight\nBeam Angle: 120°\nMaterial: Die-cast aluminum housing\nLifespan: 50,000 hours\nInput: AC 85-265V\nMounting: Adjustable bracket included"
        },
        { 
          name: "Crystal Chandelier", 
          price: "KSh 15,500", 
          specs: "6-light fitting, decorative", 
          image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=300&h=200&fit=crop",
          fullSpecs: "Lights: 6 x E14 candle bulbs\nMaterial: Crystal glass + chrome frame\nDimensions: 60cm diameter x 80cm height\nStyle: Traditional European design\nVoltage: 240V AC\nMax Power: 6 x 40W = 240W\nInstallation: Ceiling hook required\nMaintenance: Easy-clean crystal drops"
        },
        { 
          name: "Security Light PIR", 
          price: "KSh 1,800", 
          specs: "Motion sensor, 20W LED", 
          image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=200&fit=crop",
          fullSpecs: "LED Power: 20W\nPIR Sensor: 180° detection angle\nDetection Range: 12 meters\nLux Setting: Adjustable 10-2000 lux\nTime Delay: 10 seconds to 7 minutes\nIP Rating: IP44 weatherproof\nMounting: Wall mount bracket\nColor Temperature: 6000K cool white"
        },
        { 
          name: "Solar Street Light", 
          price: "KSh 8,500", 
          specs: "30W LED, integrated battery", 
          image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=300&h=200&fit=crop",
          fullSpecs: "LED Power: 30W\nSolar Panel: 60W polycrystalline\nBattery: 30Ah LiFePO4 lithium\nLuminous Flux: 3600 lumens\nWorking Time: 12+ hours daily\nCharging Time: 6-8 hours sunlight\nPole Height: 4-6 meters recommended\nControl: Automatic dusk-to-dawn\nWarranty: 3 years"
        }
      ],
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=400&h=300&fit=crop"
    },
    {
      icon: <Camera size={48} />,
      title: "CCTV Systems",
      description: "Security cameras, DVRs/NVRs, power supplies, cables, and monitoring equipment",
      products: [
        { 
          name: "Hikvision Dome Camera 2MP", 
          price: "KSh 4,200", 
          specs: "1080P HD, night vision, indoor", 
          image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=300&h=200&fit=crop",
          fullSpecs: "Model: Hikvision DS-2CE56D0T-IRF\nResolution: 1080P Full HD (1920x1080)\nLens: 2.8mm fixed lens\nNight Vision: Up to 20m IR range\nSensor: 2MP CMOS sensor\nVideo Output: TVI/AHD/CVI/CVBS\nMounting: Ceiling/wall mount\nPower: 12V DC\nOperating Temp: -40°C to +60°C"
        },
        { 
          name: "DAHUA Bullet Camera 4MP", 
          price: "KSh 6,800", 
          specs: "4K resolution, weatherproof", 
          image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=300&h=200&fit=crop",
          fullSpecs: "Model: DAHUA HAC-HFW1400T\nResolution: 4MP (2560x1440)\nLens: 3.6mm fixed lens\nNight Vision: 80m IR range\nSensor: 4MP CMOS\nIP Rating: IP67 weatherproof\nVideo Format: HDCVI 4.0\nPower: 12V DC/PoE+\nFeatures: Smart IR, WDR, 3D DNR"
        },
        { 
          name: "Hikvision DVR 8-Channel", 
          price: "KSh 12,500", 
          specs: "H.265 compression, 2TB HDD", 
          image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop",
          fullSpecs: "Model: Hikvision DS-7208HQHI-K1\nChannels: 8CH video input\nResolution: Up to 4MP per channel\nCompression: H.265+/H.265/H.264+\nHDD: 2TB SATA HDD included\nNetwork: RJ45 10/100M Ethernet\nOutputs: HDMI, VGA, BNC\nMobile App: Hik-Connect\nRecording: Motion, schedule, manual"
        },
        { 
          name: "CCTV Power Supply 12V", 
          price: "KSh 2,800", 
          specs: "12V 10A, 8-way distribution", 
          image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop",
          fullSpecs: "Input: AC 100-240V 50/60Hz\nOutput: DC 12V 10A (120W)\nChannels: 8-way fused outputs\nProtection: Over-current, short-circuit\nLED Indicators: Power and fault status\nEnclosure: Metal housing with lock\nMounting: Wall mount bracket\nCertification: CE, FCC approved"
        },
        { 
          name: "CCTV Monitor 24-inch", 
          price: "KSh 18,000", 
          specs: "LED display, HDMI/VGA inputs", 
          image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop",
          fullSpecs: "Size: 24-inch LED display\nResolution: 1920x1080 Full HD\nInputs: HDMI, VGA, BNC composite\nBrightness: 250 cd/m²\nContrast: 1000:1\nViewing Angle: 178°/178°\nResponse Time: 5ms\nMounting: VESA 100x100mm\nPower: AC 100-240V"
        }
      ],
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=400&h=300&fit=crop"
    },
    {
      icon: <Wrench size={48} />,
      title: "Tools & Equipment",
      description: "Professional electrical tools, testers, multimeters, and safety equipment",
      products: [
        { 
          name: "Digital Multimeter", 
          price: "KSh 3,500", 
          specs: "AC/DC voltage, current, resistance", 
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
          fullSpecs: "Model: Professional grade DMM\nDC Voltage: 200mV-1000V\nAC Voltage: 2V-750V\nDC Current: 200µA-10A\nAC Current: 200µA-10A\nResistance: 200Ω-20MΩ\nDisplay: 4000 counts LCD\nSafety: CAT III 600V rated\nFeatures: Auto-ranging, data hold, backlight"
        },
        { 
          name: "Crimping Tool Set", 
          price: "KSh 2,200", 
          specs: "Network cable crimper with dies", 
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
          fullSpecs: "Tool Type: Professional crimping tool\nConnectors: RJ45, RJ11, RJ12\nCable Types: Cat5e, Cat6, Cat6a\nDies: Replaceable crimping dies\nCutter: Built-in wire cutter\nStripper: Insulation stripper\nMaterial: Chrome vanadium steel\nHandle: Ergonomic non-slip grip"
        },
        { 
          name: "Impact Drill 800W", 
          price: "KSh 8,500", 
          specs: "Variable speed, hammer function", 
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop",
          fullSpecs: "Power: 800W motor\nChuck: 13mm keyed chuck\nSpeed: 0-3000 RPM variable\nImpact Rate: 0-48000 BPM\nMax Drilling: 13mm steel, 30mm wood\nModes: Drill, hammer drill\nWeight: 2.1kg\nCord: 3m power cord\nIncludes: Carry case, bits set"
        },
        { 
          name: "Extension Ladder 4m", 
          price: "KSh 12,000", 
          specs: "Aluminum, 150kg capacity", 
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop",
          fullSpecs: "Height: 4 meters extended\nMaterial: Aircraft grade aluminum\nSections: 2-section extension\nWeight Capacity: 150kg (330 lbs)\nWeight: 12kg\nRung Spacing: 300mm centers\nBase Width: 500mm\nSafety: EN 131 certified\nFeatures: Non-slip feet, rope pulley system"
        },
        { 
          name: "Safety Helmet", 
          price: "KSh 650", 
          specs: "Hard hat, adjustable headband", 
          image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop",
          fullSpecs: "Material: High-density polyethylene\nType: Class G (General)\nAdjustment: 6-point suspension\nHeadband: Adjustable ratchet\nVentilation: Side vents optional\nColor: White, yellow, blue, red\nStandards: ANSI Z89.1, EN 397\nAccessories: Chin strap, sweatband"
        }
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop"
    },
    {
      icon: <House size={48} />,
      title: "Smart Home",
      description: "Smart lighting, video doorbells, motion sensors, and home automation systems",
      products: [
        { 
          name: "Smart Light Switch", 
          price: "KSh 4,800", 
          specs: "WiFi enabled, app control", 
          image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=300&h=200&fit=crop",
          fullSpecs: "Connectivity: WiFi 2.4GHz\nControl: Mobile app, voice control\nCompatibility: Alexa, Google Assistant\nLoad: 10A resistive, 5A LED\nInstallation: Standard wall box\nFeatures: Scheduling, dimming, timer\nApp: iOS and Android\nProtocol: 802.11 b/g/n"
        },
        { 
          name: "Video Doorbell", 
          price: "KSh 8,500", 
          specs: "HD camera, two-way audio", 
          image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=300&h=200&fit=crop",
          fullSpecs: "Camera: 1080P HD video\nField of View: 180° wide angle\nNight Vision: Infrared LEDs\nAudio: Two-way communication\nStorage: Cloud + local microSD\nBattery: Rechargeable Li-ion\nWiFi: 2.4GHz wireless\nFeatures: Motion detection, mobile alerts\nApp: Real-time viewing and recording"
        },
        { 
          name: "Motion Sensor", 
          price: "KSh 2,200", 
          specs: "PIR technology, wireless", 
          image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=300&h=200&fit=crop",
          fullSpecs: "Technology: Passive Infrared (PIR)\nDetection: 12m range, 110° angle\nWireless: 433MHz RF protocol\nBattery: 3V lithium (2 years)\nSensitivity: Adjustable levels\nDelay: 1-10 minutes adjustable\nMounting: Wall or ceiling mount\nOperating: -10°C to +55°C\nRange: 100m open space transmission"
        },
        { 
          name: "Smart Alarm System", 
          price: "KSh 15,000", 
          specs: "GSM/WiFi, mobile alerts", 
          image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=300&h=200&fit=crop",
          fullSpecs: "Communication: GSM + WiFi dual\nSensors: 32 wireless zones\nSirens: Indoor/outdoor sirens\nBackup: Battery backup included\nNotification: SMS, call, app push\nControl: Keypad, remote, mobile app\nSIM: Standard GSM SIM card\nExpansion: Additional sensors supported\nMonitoring: Self-monitoring system"
        },
        { 
          name: "Home Hub Controller", 
          price: "KSh 12,500", 
          specs: "Central automation control", 
          image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=300&h=200&fit=crop",
          fullSpecs: "Protocols: Zigbee, Z-Wave, WiFi\nDevices: Support 200+ devices\nDisplay: 7-inch touchscreen\nVoice: Alexa, Google built-in\nConnectivity: Ethernet, WiFi, Bluetooth\nStorage: Local device data storage\nScenes: Custom automation scenes\nIntegration: IFTTT, smart speakers\nUpdates: Automatic firmware updates"
        }
      ],
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=300&fit=crop"
    }
  ];

  const handleViewProducts = (categoryTitle: string) => {
    console.log(`Viewing products for: ${categoryTitle}`);
    setSelectedCategory(categoryTitle);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedProduct(null);
  };

  const handleRequestQuote = (productName?: string) => {
    console.log('Request Product Quote clicked', productName ? `for ${productName}` : '');
    const message = productName 
      ? `Request quote for ${productName}. Please provide your contact details and quantity required.`
      : 'Please provide your contact details and product requirements:';
    
    const formData = prompt(message);
    if (formData) {
      alert('Thank you! Your quote request has been submitted. Our team will contact you within 24 hours with detailed pricing.');
    }
  };

  const handleDownloadCatalog = () => {
    console.log('Download Catalog clicked');
    alert('Downloading our complete product catalog with specifications and pricing. The PDF file will be available shortly.');
  };

  const handleViewDetails = (product: any) => {
    console.log('View Details clicked for:', product.name);
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  // Show product details modal
  if (selectedProduct) {
    return (
      <section id="products" className="py-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={handleCloseDetails}
              className="flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Products
            </button>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-96 overflow-hidden">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">{selectedProduct.name}</h2>
                  <div className="text-3xl font-bold text-blue-600 mb-6">{selectedProduct.price}</div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">Quick Specifications</h3>
                    <p className="text-gray-600">{selectedProduct.specs}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">Detailed Specifications</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <pre className="text-sm text-gray-700 whitespace-pre-line font-mono">
                        {selectedProduct.fullSpecs}
                      </pre>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={() => handleRequestQuote(selectedProduct.name)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
                    >
                      Get Quote
                    </button>
                    <button 
                      onClick={() => alert(`${selectedProduct.name} added to comparison list. Contact us for bulk pricing and availability.`)}
                      className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                    >
                      Add to Compare
                    </button>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">✓ Quality Guarantee</h4>
                    <p className="text-sm text-green-700">
                      All products come with manufacturer warranty and our quality guarantee. 
                      Professional installation and support available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show product listing for selected category
  if (selectedCategory) {
    const category = categories.find(cat => cat.title === selectedCategory);
    if (!category) return null;

    return (
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <button 
              onClick={handleBackToCategories}
              className="flex items-center text-blue-600 hover:text-blue-800 font-semibold mb-4"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Categories
            </button>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">{category.title}</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our complete catalog with detailed specifications and pricing
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg card-hover group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">{product.price}</p>
                  <p className="text-gray-600 mb-4">{product.specs}</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleRequestQuote(product.name)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 text-sm"
                    >
                      Get Quote
                    </button>
                    <button 
                      onClick={() => handleViewDetails(product)}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-700 hover:text-gray-900"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Need More Information?</h3>
              <p className="text-gray-600 mb-6">
                Contact our expert team for bulk pricing, technical specifications, or custom solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => handleRequestQuote()}
                  className="btn-electric hover:shadow-lg active:scale-95"
                >
                  Request Bulk Quote
                </button>
                <button 
                  onClick={handleDownloadCatalog}
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300 hover:shadow-md active:scale-95"
                >
                  Download Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show category overview
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Product Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive electrical solutions for contractors, electricians, and property owners. 
            Quality products from trusted brands with competitive pricing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg card-hover group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="absolute top-4 left-4 text-white bg-blue-600 p-2 rounded-lg">
                  {category.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <p className="text-sm text-gray-500 mb-4">Browse our complete catalog with detailed specifications and pricing.</p>
                <button 
                  onClick={() => handleViewProducts(category.title)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  View Products
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-gray-600 mb-6">
              We stock thousands of electrical products and can source specialized items on request. 
              Contact our expert team for personalized assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => handleRequestQuote()}
                className="btn-electric hover:shadow-lg active:scale-95"
              >
                Request Product Quote
              </button>
              <button 
                onClick={handleDownloadCatalog}
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300 hover:shadow-md active:scale-95"
              >
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
