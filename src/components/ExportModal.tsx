import React, { useState } from 'react';
import { X, Copy, Check, Download, FileText, Code } from 'lucide-react';
import { SEQUENCE_DAYS } from '../data/sequenceData';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [exportFormat, setExportFormat] = useState<'text' | 'whatsapp' | 'json'>('text');
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  // Generate plain text formatted output
  const generatePlainText = () => {
    return SEQUENCE_DAYS.map((day) => {
      return `${day.dayLabel} | ${day.title}\n\n${day.messageContent}\n\n${'='.repeat(40)}\n`;
    }).join('\n');
  };

  // Generate WhatsApp formatted output
  const generateWhatsAppData = () => {
    return SEQUENCE_DAYS.map((day) => {
      return `${day.whatsAppContent}\n\n${'='.repeat(40)}\n`;
    }).join('\n');
  };

  // Generate JSON formatted output
  const generateJSON = () => {
    return JSON.stringify(SEQUENCE_DAYS, null, 2);
  };

  const getExportContent = () => {
    switch (exportFormat) {
      case 'whatsapp':
        return generateWhatsAppData();
      case 'json':
        return generateJSON();
      case 'text':
      default:
        return generatePlainText();
    }
  };

  const content = getExportContent();

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDownload = () => {
    const extension = exportFormat === 'json' ? 'json' : exportFormat === 'whatsapp' ? 'txt' : 'md';
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `THE_AJOKE_12_Day_Nurture_Sequence_${exportFormat}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#2B2118]/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-[#F3EBDD] rounded-2xl shadow-2xl border border-[#E9D9C0] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-white border-b border-[#E9D9C0] flex items-center justify-between">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#2B2118]">
              Export Sequence
            </h3>
            <p className="text-xs text-[#7A6A58]">
              Full 12-Day Lead Nurture Copy for Email &amp; WhatsApp
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#7A6A58] hover:text-[#2B2118] hover:bg-[#F3EBDD] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Subheader Controls */}
        <div className="px-6 py-3 bg-[#EEDFC3]/60 border-b border-[#E9D9C0] flex flex-wrap items-center justify-between gap-3">
          {/* Format Picker */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-lg border border-[#E9D9C0]">
            <button
              onClick={() => setExportFormat('text')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                exportFormat === 'text'
                  ? 'bg-[#3E2A1E] text-white shadow-xs'
                  : 'text-[#7A6A58] hover:text-[#2B2118]'
              }`}
            >
              Standard Text
            </button>
            <button
              onClick={() => setExportFormat('whatsapp')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                exportFormat === 'whatsapp'
                  ? 'bg-[#3E2A1E] text-white shadow-xs'
                  : 'text-[#7A6A58] hover:text-[#2B2118]'
              }`}
            >
              WhatsApp (*Bold*)
            </button>
            <button
              onClick={() => setExportFormat('json')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                exportFormat === 'json'
                  ? 'bg-[#3E2A1E] text-white shadow-xs'
                  : 'text-[#7A6A58] hover:text-[#2B2118]'
              }`}
            >
              JSON Data
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#2B2118] bg-white border border-[#E9D9C0] rounded-md hover:bg-[#F3EBDD] shadow-xs transition-colors"
            >
              {isCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Copied All Days!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Entire Sequence</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#3E2A1E] rounded-md hover:bg-[#2B2118] shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>
          </div>
        </div>

        {/* Content Preview Box */}
        <div className="p-6 overflow-y-auto flex-1 font-mono text-xs text-[#2B2118] bg-white m-4 rounded-xl border border-[#E9D9C0] leading-relaxed whitespace-pre-wrap select-all">
          {content}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#F3EBDD] border-t border-[#E9D9C0] flex items-center justify-between text-xs text-[#7A6A58]">
          <span>7 core sequence touchpoints covering Day 0 to Day 12</span>
          <span>No em dashes · Clean typography</span>
        </div>
      </div>
    </div>
  );
};
